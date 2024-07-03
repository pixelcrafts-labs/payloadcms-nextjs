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
			name: "groups",
			type: "array",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
				},
				{
					name: "content",
					type: "richText",
				},
			],
		},
	],
};
