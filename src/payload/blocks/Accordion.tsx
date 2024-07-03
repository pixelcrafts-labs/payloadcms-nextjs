import type { Block } from "payload";
import richTextEditor from "@cms/fields/richText";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Accordion: Block = {
	slug: "accordion",
	fields: [
		{
			name: "heading",
			type: "text",
		},
		{
			name: "content",
			type: "richText",
			required: true,
			editor: lexicalEditor(),
		},
	],
};
