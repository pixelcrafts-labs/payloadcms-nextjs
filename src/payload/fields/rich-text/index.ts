import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { defaultFeatures } from "./default-features";

const richTextEditor = lexicalEditor({
	features: defaultFeatures,
});

export default richTextEditor;
