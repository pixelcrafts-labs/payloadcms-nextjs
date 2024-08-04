import type { Payload } from "payload";

export default async function createSettings(payload: Payload) {
	const homePage = payload.find({
		collection: "pages",
		where: {
			slug: {
				equals: "home",
			},
		},
	});

	const errorPage = payload.find({
		collection: "pages",
		where: {
			slug: {
				equals: "error",
			},
		},
	});

	const notFoundPage = payload.find({
		collection: "pages",
		where: {
			slug: {
				equals: "not-found",
			},
		},
	});

	const [{ docs: homeDocs }, { docs: errorDocs }, { docs: notFoundDocs }] =
		await Promise.all([homePage, errorPage, notFoundPage]);

	await payload.updateGlobal({
		slug: "settings",
		data: {
			default: homeDocs[0]?.id,
			error: errorDocs[0]?.id,
			notFound: notFoundDocs[0]?.id,
		},
	});
}
