import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

// for getting the latest instance
export default function getPayload() {
	return getPayloadHMR({ config: configPromise });
}
