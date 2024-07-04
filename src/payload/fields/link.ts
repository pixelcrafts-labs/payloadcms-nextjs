import type { Field } from "payload";

export const link = (): Field => {
	const linkTypes: Field = {
		type: "row",
		fields: [
			{
				name: "type",
				type: "radio",
				defaultValue: "reference",

				admin: {
					width: "50%",
				},

				options: [
					{
						label: "Internal link",
						value: "reference",
					},
					{
						label: "Custom URL",
						value: "custom",
					},
				],
			},
			{
				name: "openInNewTab",
				label: "Open in new tab",
				admin: {
					style: {
						alignSelf: "flex-end",
					},
					width: "50%",
				},
				type: "checkbox",
			},
		],
	};

	return {
		name: "link",
		type: "group",
		fields: [linkTypes],
	};
};
