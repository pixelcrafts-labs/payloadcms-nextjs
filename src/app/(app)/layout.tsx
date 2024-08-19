import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import CSSVariablesUpdater from "@/components/ui/css-variables-updater";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";

const primaryFont = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-primary",
	weight: ["500"],
});

import "@/styles/globals.scss";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: "#ffffff",
};

export const metadata: Metadata = {
	title: "Pixel CraftsLabs",
	openGraph: {
		title: "Pixel CraftsLabs",
		type: "website",
		description: "Crafting your website on the fly",
		locale: "en-US",
	},
};

export const revalidate = 0;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(primaryFont.variable, "antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					<CSSVariablesUpdater />
					<MainContent>{children}</MainContent>
					<Footer />
					<div id="modal" />
				</ThemeProvider>
			</body>
		</html>
	);
}
