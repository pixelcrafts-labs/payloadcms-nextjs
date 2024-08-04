import type { Payload } from "payload";
import createUsers from "./collections/users";
import createPages from "./collections/pages";
import createSettings from "./globals/settings";
import { isInitial } from "./utils";

export default async function seeds(payload: Payload) {
	const isInitialSetup = await isInitial(payload);
	if (!isInitialSetup) return;

	// create users
	await createUsers(payload);

	// create pages
	await createPages(payload);

	// create settings
	await createSettings(payload);
}
