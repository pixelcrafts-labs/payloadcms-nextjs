import type { Block, Field, TabsField } from "payload";

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
	const tabsField = block.fields.find((field) => field.type === "tabs");

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

	// extends the tabs from the block
	if (tabsField) {
		(block.fields[0] as TabsField).tabs = (
			block.fields[0] as TabsField
		).tabs.concat(tabsField.tabs);
	}

	return block;
}
