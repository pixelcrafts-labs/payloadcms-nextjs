import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="mt-12 text-center mt-50">
			<h1 className="mb-10">Hello and welcome!</h1>
			<Button variant={"outline"}>
				<Link href={"/typography"}>Go to typography</Link>
			</Button>
		</main>
	);
}
