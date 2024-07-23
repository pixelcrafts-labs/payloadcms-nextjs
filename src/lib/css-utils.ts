export const getCSSVariable = (element: HTMLElement, variableName: string) => {
	return getComputedStyle(element).getPropertyValue(variableName);
};

export const setCSSVariable = (
	element: HTMLElement,
	variableName: string,
	value: string | undefined = undefined
) => {
	// validate value
	const validatedValue =
		value !== undefined ? value : getCSSVariable(element, variableName);

	// set value
	element.style.setProperty(variableName, validatedValue);
};

const convertRemToPixel = (value: number) => {
	return (
		value * parseFloat(getComputedStyle(document.documentElement).fontSize)
	);
};

export const getPixelValue = (value: string) => {
	const numericValue = parseFloat(value);

	if (value.includes("rem")) {
		return convertRemToPixel(numericValue);
	}

	return numericValue;
};
