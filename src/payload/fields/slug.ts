import type { Field } from "payload";

import deepMerge from "@cms/utilities/deep-merge";
import formatSlug from "@cms/hooks/format-slug";

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
