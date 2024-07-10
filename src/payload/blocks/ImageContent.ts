import type { Block } from "payload";

export const ImageContent: Block = {
	slug: "image-content",
	fields: [
		{
			name: "content",
			type: "richText",
			required: true,
		},
		{
			type: "row",
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",

					required: true,
					admin: {
						width: "50%",
					},
				},
				{
					name: "image-position",
					type: "select",
					defaultValue: "left",
					options: [
						{
							label: "Left",
							value: "left",
						},
						{
							label: "Right",
							value: "right",
						},
					],
				},
			],
		},
	],
};