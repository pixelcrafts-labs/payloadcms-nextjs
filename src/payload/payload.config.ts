// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import ENV from "@/lib/env";
import richTextEditor from "@/payload/fields/rich-text";
import { s3Storage } from "@payloadcms/storage-s3";

// collections
import { Users } from "@cms/collections/Users";
import { Media } from "@cms/collections/Media";
import { Pages } from "@cms/collections/Pages";
import { Menu } from "@cms/collections/Menu";

// globals
import { Header } from "@cms/globals/Header";
import { Footer } from "@cms/globals/Footer";
import { Settings } from "@cms/globals/Settings";

// seeds
import seeds from "./seeds";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		autoLogin:
			process.env["NODE_ENV"] === "development"
				? {
						email: ENV.PAYLOAD_DEV_EMAIL,
						password: ENV.PAYLOAD_DEV_PASSWORD,
						prefillOnly: true,
					}
				: undefined,
	},

	// Define and configure your collections in this array
	collections: [Menu, Media, Pages, Users],

	// Define globals
	globals: [Header, Footer, Settings],

	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},

	// If you'd like to use Rich Text, pass your editor here
	editor: richTextEditor,

	// Your Payload secret - should be a complex and secure string, unguessable
	secret: ENV.PAYLOAD_SECRET,

	// Whichever database adapter you're using should go here
	// Mongoose is shown as an example, but you can also use Postgres
	db: ENV.PAYLOAD_DATABASE_URI.startsWith("postgresql")
		? postgresAdapter({
				pool: {
					connectionString: ENV.PAYLOAD_DATABASE_URI || "",
				},
			})
		: mongooseAdapter({
				url: ENV.PAYLOAD_DATABASE_URI || "",
			}),

	// If you want to resize images, crop, set focal point, etc.
	// make sure to install it and pass it to the config.
	// This is optional - if you don't need to do these things,
	// you don't need it!
	sharp,

	plugins: [
		// storage-adapter-placeholder
		s3Storage({
			collections: {
				[Media.slug]: true,
			},
			bucket: ENV.S3_BUCKET,
			config: {
				forcePathStyle: true,
				credentials: {
					accessKeyId: ENV.S3_ACCESS_KEY_ID,
					secretAccessKey: ENV.S3_SECRET_ACCESS_KEY,
				},
				region: ENV.S3_REGION,
				endpoint: ENV.S3_ENDPOINT,
				// ... Other S3 configuration
			},
		}),
	],

	// after init callback
	onInit: seeds,
});
