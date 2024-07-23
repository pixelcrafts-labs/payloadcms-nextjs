"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

export default function ColorModeSwitcher() {
	const { resolvedTheme, setTheme } = useTheme();

	const handleSwitchTheme = () => {
		const nextTheme = resolvedTheme === "light" ? "dark" : "light";
		setTheme(nextTheme);
	};

	return (
		<Button variant="outline" size="icon" onClick={handleSwitchTheme}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
		</Button>
	);
}
