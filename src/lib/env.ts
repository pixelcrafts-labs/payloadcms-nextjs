import { z } from "zod";

const envSchema = z.object({
	PAYLOAD_DATABASE_URI: z.string(),
	PAYLOAD_SECRET: z.string(),
	PAYLOAD_CONFIG_PATH: z.string(),
});

const ENV = envSchema.parse(process.env);
export default ENV;
