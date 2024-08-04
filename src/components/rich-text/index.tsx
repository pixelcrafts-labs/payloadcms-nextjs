import { serializeLexical } from "./serialize";

type Props = {
	content: any;
};

const RichText = ({ content }: Props) => {
	if (!content) {
		return null;
	}

	return (
		<div className="lexical-editor">
			{content &&
				!Array.isArray(content) &&
				typeof content === "object" &&
				"root" in content &&
				serializeLexical({ nodes: content?.root?.children })}
		</div>
	);
};

export default RichText;
