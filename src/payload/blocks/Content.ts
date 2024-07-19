import customBlockFields from "@cms/utilities/custom-block";

export const Content = customBlockFields({
	slug: "content",
	fields: [
		{
			name: "content",
			type: "richText",
			required: true,
		},
	],
});
