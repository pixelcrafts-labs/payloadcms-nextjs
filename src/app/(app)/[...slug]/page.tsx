import getPayload from "@/lib/payload";
import type { Page } from "@/payload/payload-types";
import { notFound } from "next/navigation";

type Props = {
	params: {
		slug: string[];
	};
};

const validateSlug = async (slug: string[]): Promise<Page | undefined> => {
	if (!slug || slug.length === 0) return undefined;

	const payload = await getPayload();
	const validatedSlug = slug[0];

	// find page
	const result = await payload.find({
		collection: "pages",
		where: {
			slug: {
				equals: validatedSlug,
			},
		},
	});

	if (result.docs.length === 0) return undefined;
	return result.docs[0];
};

export default async function Page({ params: { slug } }: Props) {
	const pageData = await validateSlug(slug);
	if (!pageData) {
		return notFound();
	}

	console.log(pageData);

	return (
		<div>
			<div className="lexical-editor text-center">
				<h1 className="text-heading-2">Hello and welcome!</h1>
			</div>
		</div>
	);
}
