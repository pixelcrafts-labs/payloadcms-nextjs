import customBlockFields from "@cms/utilities/custom-block";

export const Accordion = customBlockFields({
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
});
