import type { Block, Field } from "payload";

const bottomSpacing: Field = {
	name: "bottom-spacing",
	type: "select",

	admin: {
		width: "50%",
	},

	defaultValue: "default",
	required: true,
	options: [
		{
			label: "Default",
			value: "default",
		},
		{
			label: "Small",
			value: "small",
		},
		{
			label: "Medium",
			value: "medium",
		},
		{
			label: "Large",
			value: "large",
		},
		{
			label: "None",
			value: "none",
		},
	],
};

export default function customBlockFields(block: Block) {
	if (!block.fields) return block;

	// adding default fields
	block.fields = [
		{
			type: "tabs",
			tabs: [
				{
					name: block.slug,
					fields: block.fields,
				},
				{
					name: "options",
					fields: [bottomSpacing],
				},
			],
		},
	];

	return block;
}
