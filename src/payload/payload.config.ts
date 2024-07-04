// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import ENV from "@/lib/env";

// Collections
import { Users } from "@cms/collections/Users";
import { Media } from "@cms/collections/Media";
import { Pages } from "@cms/collections/Pages";
import { Categories } from "@cms/collections/Categories";
import { Posts } from "@cms/collections/Posts";

// Globals
import { Header } from "@cms/globals/Header";
// import emailConfiguration from "./configs/email";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
	},

	// Define and configure your collections in this array
	collections: [Media, Pages, Posts, Categories, Users],

	// Define globals
	globals: [Header],

	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},

	// If you'd like to use Rich Text, pass your editor here
	editor: lexicalEditor(),

	// Your Payload secret - should be a complex and secure string, unguessable
	secret: ENV.PAYLOAD_SECRET,

	// Whichever database adapter you're using should go here
	// Mongoose is shown as an example, but you can also use Postgres
	db: mongooseAdapter({
		url: ENV.PAYLOAD_DATABASE_URI,
	}),

	// If you want to resize images, crop, set focal point, etc.
	// make sure to install it and pass it to the config.
	// This is optional - if you don't need to do these things,
	// you don't need it!
	sharp,

	// Configuring email for the CMS
	// email: emailConfiguration,

	plugins: [
		// storage-adapter-placeholder
	],
});
