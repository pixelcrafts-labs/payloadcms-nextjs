import type { Field } from "payload";

import deepMerge from "@cms/utilities/deepMerge";
import formatSlug from "@cms/hooks/formatSlug";

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const slugField: Slug = (fieldToUse = "title", overrides = {}) =>
	deepMerge<Field, Partial<Field>>(
		{
			name: "slug",
			admin: {
				position: "sidebar",
			},
			hooks: {
				beforeValidate: [formatSlug(fieldToUse)],
			},
			index: true,
			label: "Slug",
			type: "text",
		},
		overrides
	);
