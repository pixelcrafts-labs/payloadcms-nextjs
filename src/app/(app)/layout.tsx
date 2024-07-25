import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import CSSVariablesUpdater from "@/components/ui/css-variables-updater";
import MainContent from "@/components/ui/main-content";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.scss";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(inter.className, "antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					<CSSVariablesUpdater />
					<MainContent>{children}</MainContent>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
