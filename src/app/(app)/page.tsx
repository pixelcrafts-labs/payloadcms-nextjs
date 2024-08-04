import PayloadComponents from "@/components/payload-components";
import getPayload from "@/lib/payload";
import type { Page } from "@/payload/payload-types";

export default async function Page() {
	const payload = await getPayload();
	const { default: pageData } = await payload.findGlobal({
		slug: "settings",
	});

	return (
		<>
			<PayloadComponents components={(pageData as Page).components} />
		</>
	);
}
