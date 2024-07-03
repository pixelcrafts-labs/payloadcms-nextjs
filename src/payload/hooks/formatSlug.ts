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
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "")
		.toLowerCase();
};

const formatSlug =
	(fallback: string): FieldHook =>
	({ data, operation, originalDoc, value }) => {
		// has value
		if (value) {
			console.log("has value", value, format(value));
			return format(value);
		}

		// get fallback value from sibling field
		const fallbackData = data?.[fallback] || originalDoc?.[fallback];
		if (fallbackData && typeof fallbackData === "string") {
			return format(fallbackData);
		}

		// return empty value
		return value;
	};

export default formatSlug;
