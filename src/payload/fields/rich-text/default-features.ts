import {
	AlignFeature,
	BlockquoteFeature,
	BoldFeature,
	HeadingFeature,
	HorizontalRuleFeature,
	InlineToolbarFeature,
	ItalicFeature,
	LinkFeature,
	OrderedListFeature,
	ParagraphFeature,
	UnderlineFeature,
	UnorderedListFeature,
} from "@payloadcms/richtext-lexical";

export const defaultFeatures = [
	// paragraph
	ParagraphFeature(),
	HeadingFeature(),
	BlockquoteFeature(),

	// bold, italic, underline
	BoldFeature(),
	ItalicFeature(),
	UnderlineFeature(),
	AlignFeature(),

	// list
	UnorderedListFeature(),
	OrderedListFeature(),

	// tools
	InlineToolbarFeature(),
	HorizontalRuleFeature(),

	// link
	LinkFeature({
		enabledCollections: ["pages", "posts"],
	}),
];
