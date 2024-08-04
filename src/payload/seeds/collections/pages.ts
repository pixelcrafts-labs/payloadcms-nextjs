import type { Payload } from "payload";

export default async function createPages(payload: Payload) {
	// create error page
	await payload.create({
		collection: "pages",
		data: {
			title: "Error",
			slug: "error",
		},
	});

	// create not found page
	await payload.create({
		collection: "pages",
		data: {
			title: "Not Found",
			slug: "not-found",
		},
	});

	// create home page
	await payload.create({
		collection: "pages",
		data: {
			title: "Home",
		},
	});
}
