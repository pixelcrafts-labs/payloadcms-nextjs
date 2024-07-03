import type { Field } from "payload";

import deepMerge from "@cms/utilities/deepMerge";
import validatePublishedDate from "@cms/hooks/validatePublishedDate";

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
