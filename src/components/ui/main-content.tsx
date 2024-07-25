import type { ReactNode } from "react";

export default function MainContent({ children }: { children: ReactNode }) {
	return <div className="pt-header-height">{children}</div>;
}
