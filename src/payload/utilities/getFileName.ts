const getFileName = (filename: string): string => {
	// not exist
	if (!filename) return "";

	// Find the last dot in the filename
	const lastDotIndex = filename.lastIndexOf(".");

	// If there's no dot, return the original filename
	if (lastDotIndex === -1) {
		return filename;
	}

	// Return the substring from the start to the last dot
	return filename.substring(0, lastDotIndex);
};

export default getFileName;
