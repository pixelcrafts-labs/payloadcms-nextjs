import { z } from "zod";

const envSchema = z.object({
	PAYLOAD_DATABASE_URI: z.string(),
	PAYLOAD_SECRET: z.string(),
	PAYLOAD_CONFIG_PATH: z.string(),

	// Email
	PAYLOAD_EMAIL_ADDRESS: z.string(),
	PAYLOAD_EMAIL_NAME: z.string(),
	PAYLOAD_SMTP_HOST: z.string(),
	PAYLOAD_SMTP_PORT: z.coerce.number(),
	PAYLOAD_SMTP_USER: z.string(),
	PAYLOAD_SMTP_PASS: z.string(),
});

const ENV = envSchema.parse(process.env);
export default ENV;