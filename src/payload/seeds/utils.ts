import type { Payload } from "payload";

export async function isInitial(payload: Payload) {
	const existingUsers = await payload.find({
		collection: "users",
		limit: 1,
	});
	return existingUsers.docs.length === 0;
}
