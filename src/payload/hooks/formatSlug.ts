import type { FieldHook } from "payload";

/**
 * Convert string to slug
 * @param string
 * @return string
 * */
const format = (string: string) => {
	if (!string) return "";
	return string
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "d")
		.replace(/Đ/g, "D")
		.replace(/[^\w ]+/g, "")
		.replace(/ +/g, "-")
		.toLowerCase();
};

const formatSlug =
	(fallback: string): FieldHook =>
	({ data, operation, originalDoc, value }) => {
		if (typeof value === "string") {
			return format(value);
		}

		if (operation === "create") {
			const fallbackData = data?.[fallback] || originalDoc?.[fallback];

			if (fallbackData && typeof fallbackData === "string") {
				return format(fallbackData);
			}
		}

		return value;
	};

export default formatSlug;
