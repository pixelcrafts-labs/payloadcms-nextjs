import type { Payload } from "payload";

export default async function createUsers(payload: Payload) {
	// dev account
	await payload.create({
		collection: "users",
		data: {
			email: "dev@pixelcraftslabs.com",
			password: "test",
			name: "Admin",
			roles: ["admin"],
		},
	});

	// admin account
	await payload.create({
		collection: "users",
		data: {
			email: "admin@pixelcraftslabs.com",
			password: "pixelcraftslabs@aSd",
			name: "Admin",
			roles: ["admin"],
		},
	});
}
