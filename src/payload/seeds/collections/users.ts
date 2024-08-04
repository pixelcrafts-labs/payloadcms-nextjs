import type { Payload } from "payload";

export default async function createUsers(payload: Payload) {
	await payload.create({
		collection: "users",
		data: {
			email: "dev@payloadcms.com",
			password: "test",
			name: "Admin",
			roles: ["admin"],
		},
	});
}
