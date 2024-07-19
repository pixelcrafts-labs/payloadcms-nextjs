import type { Field } from "payload";

import deepMerge from "@cms/utilities/deep-merge";
import validatePublishedDate from "@cms/hooks/validate-published-date";

type PublishedDate = (overrides?: Partial<Field>) => Field;

export const publishedDateField: PublishedDate = (overrides = {}) =>
	deepMerge<Field, Partial<Field>>(
		{
			name: "publishedDate",
			admin: {
				position: "sidebar",
			},
			hooks: {
				beforeValidate: [validatePublishedDate()],
			},
			type: "date",
		},
		overrides
	);
