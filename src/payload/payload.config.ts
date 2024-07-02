// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import ENV from "@/lib/env";

import { Users } from "@cms/collections/Users";
import { Media } from "@cms/collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [Users, Media],
	editor: lexicalEditor(),
	secret: ENV.PAYLOAD_SECRET,
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		url: ENV.PAYLOAD_DATABASE_URI,
	}),
	sharp,
	plugins: [
		// storage-adapter-placeholder
	],
});
