import Link from "next/link";
import React, { Fragment, JSX, ReactElement } from "react";

import {
	IS_BOLD,
	IS_CODE,
	IS_ITALIC,
	IS_STRIKETHROUGH,
	IS_SUBSCRIPT,
	IS_SUPERSCRIPT,
	IS_UNDERLINE,
} from "./nodeFormat";
import {
	LinkFields,
	SerializedHeadingNode,
	SerializedLinkNode,
	SerializedListItemNode,
	SerializedListNode,
	// SerializedQuoteNode,
	SerializedTextNode,
} from "@payloadcms/richtext-lexical";

import type {
	ElementFormatType,
	SerializedElementNode,
	SerializedLexicalNode,
} from "lexical";

interface Props {
	nodes: SerializedLexicalNode[];
	format?: ElementFormatType;
}

export function serializeLexical({ nodes, format = "" }: Props): ReactElement {
	return (
		<>
			{nodes?.map((_node, index): ReactElement | null => {
				if (_node.type === "text") {
					const node = _node as SerializedTextNode;
					const content = node.text;

					// default element
					let text = <Fragment key={index}>{content}</Fragment>;

					// BOLD, ITALIC, STRIKETHROUGH, UNDERLINE
					if (node.format & IS_BOLD) {
						text = <strong key={index}>{text}</strong>;
					}
					if (node.format & IS_ITALIC) {
						text = <em key={index}>{text}</em>;
					}
					if (node.format & IS_STRIKETHROUGH) {
						text = (
							<span key={index} style={{ textDecoration: "line-through" }}>
								{text}
							</span>
						);
					}
					if (node.format & IS_UNDERLINE) {
						text = (
							<span key={index} style={{ textDecoration: "underline" }}>
								{text}
							</span>
						);
					}

					// CODE, SUBSCRIPT, SUPERSCRIPT
					if (node.format & IS_CODE) {
						text = <code key={index}>{text}</code>;
					}
					if (node.format & IS_SUBSCRIPT) {
						text = <sub key={index}>{text}</sub>;
					}
					if (node.format & IS_SUPERSCRIPT) {
						text = <sup key={index}>{text}</sup>;
					}

					// LEFT / RIGHT / CENTER
					if (format) {
						text = (
							<span
								style={{
									textAlign: format,
									display: "block",
								}}
							>
								{content}
							</span>
						);
					}

					return text;
				}

				if (_node == null) {
					return null;
				}

				// NOTE: Hacky fix for
				// https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
				// which does not return checked: false (only true - i.e. there is no prop for false)
				const serializedChildrenFn = (
					node: SerializedElementNode
				): ReactElement | null => {
					if (node.children == null) return null;

					if (
						node?.type === "list" &&
						(node as SerializedListNode)?.listType === "check"
					) {
						for (const item of node.children) {
							if ("checked" in item) {
								if (!item?.checked) {
									item.checked = false;
								}
							}
						}
					}

					return serializeLexical({
						nodes: node.children,
						format: node.format,
					});
				};

				const serializedChildren =
					"children" in _node
						? serializedChildrenFn(_node as SerializedElementNode)
						: "";

				switch (_node.type) {
					case "linebreak": {
						return <br key={index} />;
					}

					case "paragraph": {
						return <p key={index}>{serializedChildren}</p>;
					}

					case "heading": {
						const node = _node as SerializedHeadingNode;

						type Heading = Extract<
							keyof JSX.IntrinsicElements,
							"h1" | "h2" | "h3" | "h4" | "h5" | "h6"
						>;
						const Tag = node?.tag as Heading;
						return <Tag key={index}>{serializedChildren}</Tag>;
					}

					case "list": {
						const node = _node as SerializedListNode;

						type List = Extract<keyof JSX.IntrinsicElements, "ol" | "ul">;
						const Tag = node?.tag as List;
						return (
							<Tag className={node?.listType} key={index}>
								{serializedChildren}
							</Tag>
						);
					}
					case "listitem": {
						const node = _node as SerializedListItemNode;

						if (node?.checked != null) {
							return (
								<li
									aria-checked={node.checked ? "true" : "false"}
									className={`component--list-item-checkbox ${
										node.checked
											? "component--list-item-checkbox-checked"
											: "component--list-item-checked-unchecked"
									}`}
									key={index}
									role="checkbox"
									tabIndex={-1}
									value={node?.value}
								>
									{serializedChildren}
								</li>
							);
						} else {
							return (
								<li key={index} value={node?.value}>
									{serializedChildren}
								</li>
							);
						}
					}
					case "quote": {
						return <blockquote key={index}>{serializedChildren}</blockquote>;
					}
					case "link": {
						const node = _node as SerializedLinkNode;
						const fields: LinkFields = node.fields;

						const relationShip = fields.doc?.value as unknown as {
							slug: string;
						};
						const url =
							fields.linkType === "custom" ? fields.url : relationShip?.slug;

						return (
							<Link
								href={url}
								key={index}
								{...(fields?.newTab
									? {
											rel: "noopener noreferrer",
											target: "_blank",
										}
									: {})}
							>
								{serializedChildren}
							</Link>
						);
					}

					default:
						return null;
				}
			})}
		</>
	);
}
