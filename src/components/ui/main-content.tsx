import type { ReactNode } from "react";

export default function MainContent({ children }: { children: ReactNode }) {
	return <main className="pt-header-height">{children}</main>;
}
