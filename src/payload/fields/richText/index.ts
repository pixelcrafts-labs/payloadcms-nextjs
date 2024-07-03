import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { defaultPublicDemoFeatures } from "./defaultFeatures";

const richTextEditor = lexicalEditor({
	features: ({ defaultFeatures, rootFeatures }) => {
		return [...defaultFeatures];
	},
});

export default richTextEditor;
