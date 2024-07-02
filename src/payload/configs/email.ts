import ENV from "@/lib/env";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

const emailConfiguration = nodemailerAdapter({
	defaultFromAddress: ENV.PAYLOAD_EMAIL_ADDRESS,
	defaultFromName: ENV.PAYLOAD_EMAIL_NAME,
	transportOptions: {
		host: ENV.PAYLOAD_SMTP_HOST,
		port: 587,
		auth: {
			user: ENV.PAYLOAD_SMTP_USER,
			pass: ENV.PAYLOAD_SMTP_PASS,
		},
	},
});
export default emailConfiguration;
