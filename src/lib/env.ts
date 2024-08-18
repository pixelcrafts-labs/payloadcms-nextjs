import { z } from "zod";

const envSchema = z.object({
	PAYLOAD_DATABASE_URI: z.string(),
	PAYLOAD_SECRET: z.string(),
	S3_BUCKET: z.string(),
	S3_ACCESS_KEY_ID: z.string(),
	S3_SECRET_ACCESS_KEY: z.string(),
	S3_REGION: z.string(),
	S3_ENDPOINT: z.string(),
});

const ENV = envSchema.parse(process.env);
export default ENV;
