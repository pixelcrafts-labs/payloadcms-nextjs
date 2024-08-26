import type { Payload } from "payload";

export default async function createUsers(payload: Payload) {
	// dev account
	await payload.create({
		collection: "users",
		data: {
			email: ENV.PAYLOAD_DEV_EMAIL,
			password: ENV.PAYLOAD_DEV_PASSWORD,
			name: "Developer",
			roles: ["admin"],
		},
	});
}
