"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
	title: string;
	url: string;
	openInNewTab: boolean;
};

const subMenuSelector = ".header__sub-menu";
const activeClass = "active";

const findElement = (element: Element): Element[] => {
	const parentElement = element.classList.contains(subMenuSelector.slice(1))
		? element.parentElement
		: element.closest(subMenuSelector);

	let result: Element[] = [];

	if (parentElement) {
		const elements = findElement(parentElement);
		result.push(parentElement);
		result = result.concat(elements);
	}

	return result;
};

export default function Item({ title, url, openInNewTab }: Props) {
	const segment = useSelectedLayoutSegment()?.split("/").slice(-1)[0];
	const activeElementRef = useRef<HTMLAnchorElement>(null);
	const isActive = segment === url;

	useEffect(() => {
		if (!isActive) return;

		const elements = findElement(activeElementRef.current!);
		elements.forEach((e) => e.classList.add(activeClass));

		return () => {
			elements.forEach((e) => e.classList.remove(activeClass));
		};
	}, [segment, isActive]);

	return (
		<li className="header__menu-item">
			<Link
				className={`header__menu-link flex items-center ${isActive ? "active" : ""}`}
				ref={activeElementRef}
				href={"/" + url}
				target={openInNewTab ? "_blank" : ""}
			>
				{title}
			</Link>
		</li>
	);
}
