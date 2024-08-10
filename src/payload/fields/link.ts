import type { Field, GroupField } from "payload";
import deepMerge from "@cms/utilities/deep-merge";

export type LinkAppearances = "primary" | "secondary" | "default";

type LinkType = (options?: {
	disableLabel?: boolean;
	overrides?: Partial<GroupField>;
}) => Field;

const link: LinkType = ({ disableLabel = false, overrides = {} } = {}) => {
	let linkResult: Field = {
		name: "link",
		type: "group",
		admin: {
			hideGutter: true,
			...(overrides?.admin || {}),
		},
		fields: [
			{
				type: "row",
				fields: [
					{
						name: "type",
						type: "radio",
						options: [
							{
								label: "Internal link",
								value: "reference",
							},
							{
								label: "External link",
								value: "custom",
							},
							{
								label: "Custom menu",
								value: "menu",
							},
						],
						defaultValue: "reference",
						admin: {
							layout: "horizontal",
							width: "60%",
						},
					},
					{
						name: "new-tab",
						label: "Open in new tab",
						type: "checkbox",
						admin: {
							width: "40%",
							style: {
								alignSelf: "flex-end",
							},
							condition: (_, siblingData) => {
								return siblingData["type"] !== "menu";
							},
						},
					},
				],
			},
		],
	};

	let linkTypes: Field[] = [
		{
			name: "reference",
			label: "Document to link to",
			type: "relationship",
			relationTo: ["pages"],
			required: true,
			admin: {
				condition: (_, siblingData) => siblingData["type"] === "reference",
			},
		},
		{
			name: "url",
			label: "External link",
			type: "text",
			required: true,
			admin: {
				condition: (_, siblingData) => siblingData["type"] === "custom",
			},
		},
		{
			name: "menu",
			label: "Custom Menu",
			type: "relationship",
			relationTo: ["menu"],
			required: true,
			admin: {
				condition: (_, siblingData) => siblingData["type"] === "menu",
			},
		},
	];

	// show label
	if (!disableLabel) {
		// guard condition to avoid TS warning
		if (linkTypes[0] && linkTypes[0].admin) linkTypes[0].admin.width = "50%";
		if (linkTypes[1] && linkTypes[1].admin) linkTypes[1].admin.width = "50%";
		if (linkTypes[2] && linkTypes[2].admin) linkTypes[2].admin.width = "50%";

		linkResult.fields.push({
			type: "row",
			fields: [
				...linkTypes,
				{
					name: "label",
					label: "Label",
					type: "text",
					admin: {
						width: "50%",
					},
					hooks: {
						beforeValidate: [
							async ({ value, siblingData, req }) => {
								const type = siblingData["type"];

								// reference and menu
								const isReferenceOrMenu =
									type === "reference" || type === "menu";

								// get the page title or the menu title
								if (isReferenceOrMenu && !value) {
									const collection = siblingData[type].relationTo;
									const id = siblingData[type].value;

									const data = await req.payload.findByID({
										collection,
										id,
									});

									return data.title;
								}

								return value;
							},
						],
					},
					validate: (value, { siblingData }) => {
						const errorMessage = "You should input the value to this field";

						if (!siblingData || !("type" in siblingData)) return errorMessage;
						const type = siblingData["type"] as unknown as string;

						// for "reference" and "menu"
						// we don't need to input the label
						const isReferenceOrMenu = type === "reference" || type === "menu";

						// for custom URL
						if (!isReferenceOrMenu) {
							return Boolean(value) || errorMessage;
						}

						return true;
					},
				},
			],
		});
	} else {
		linkResult.fields = [...linkResult.fields, ...linkTypes];
	}

	return deepMerge(linkResult, overrides);
};

export default link;
