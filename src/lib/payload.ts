import { getPayloadHMR } from "@payloadcms/next/utilities";
import { getPayload as getPayLoadProd } from "payload";
import configPromise from "@payload-config";

// for getting the latest instance
export default function getPayload() {
	const fn =
		process.env["NODE_ENV"] === "development" ? getPayloadHMR : getPayLoadProd;
	return fn({ config: configPromise });
}
