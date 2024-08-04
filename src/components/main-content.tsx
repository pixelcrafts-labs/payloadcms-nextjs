import type { ReactNode } from "react";
import Container from "./container";

export default function MainContent({ children }: { children: ReactNode }) {
	return (
		<main className="pt-header-height">
			<Container>{children}</Container>
		</main>
	);
}
