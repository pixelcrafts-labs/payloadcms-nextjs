import {
	BlockquoteFeature,
	BoldFeature,
	HeadingFeature,
	ItalicFeature,
	LinkFeature,
	ParagraphFeature,
	UnderlineFeature,
} from "@payloadcms/richtext-lexical";

export const defaultPublicDemoFeatures = [
	ParagraphFeature(),
	BoldFeature(),
	ItalicFeature(),
	UnderlineFeature(),
	BlockquoteFeature(),
	HeadingFeature({
		enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"],
	}),
	LinkFeature({}),
];
