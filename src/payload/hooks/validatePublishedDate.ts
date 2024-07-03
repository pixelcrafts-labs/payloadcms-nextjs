import type { FieldHook } from "payload";

const validatePublishedDate =
	(): FieldHook =>
	({ value }) => {
		return value ? value : new Date();
	};

export default validatePublishedDate;
