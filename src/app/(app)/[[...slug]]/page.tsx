import getPayload from "@/lib/payload";

type Props = {
	params: {
		slug: string[];
	};
};

export default async function Page({ params }: Props) {
	const payload = await getPayload();

	return (
		<main className="container mt-12 mt-50">
			<div className="lexical-editor text-center">
				<h1 className="mb-10 text-heading-2">Hello and welcome!</h1>
			</div>
		</main>
	);
}
