import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import CSSVariablesUpdater from "@/components/ui/css-variables-updater";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.scss";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	// themeColor: "#ffffff",
};

export const metadata: Metadata = {
	title: "Pixel CraftsLabs",
	// manifest: "/manifest.json",
	openGraph: {
		title: "Pixel CraftsLabs",
		type: "website",
		description: "Crafting your website on the fly",
		locale: "en-US",
		// images: [
		// 	{
		// 		url: `${env.BASE_URL}/images/browse.png`,
		// 	},
		// ],
	},
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
					<div id="modal" />
				</ThemeProvider>
			</body>
		</html>
	);
}
