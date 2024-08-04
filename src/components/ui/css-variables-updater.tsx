"use client";

import { getCSSVariable, getPixelValue, setCSSVariable } from "@/lib/css-utils";
import { useEffect } from "react";

export default function CSSVariablesUpdater() {
	useEffect(() => {
		const htmlTag = document.documentElement;

		const updateCSSVariables = () => {
			/**
			 * CSS Variables:
			 * - 100vw
			 * - container
			 * - gap-container
			 * - gap-side
			 * - scroll-bar-width
			 * */

			// reset
			setCSSVariable(htmlTag, "--100vw", "");
			setCSSVariable(htmlTag, "--gap-side", "");
			setCSSVariable(htmlTag, "--container", "");

			// get CSS variable
			const containerVariable = getCSSVariable(htmlTag, "--container");
			const gapContainerVariable = getCSSVariable(htmlTag, "--gap-container");

			// calc new value
			const gapContainer = getPixelValue(gapContainerVariable);
			const vw100 = document.body.clientWidth;
			const container = Math.min(
				getPixelValue(containerVariable) + 2 * gapContainer,
				vw100
			);
			const scrollbarWidth = window.innerWidth - vw100;
			const gapSize = (vw100 - container) * 0.5 + gapContainer;

			// scrollbar width
			scrollbarWidth &&
				setCSSVariable(htmlTag, "--scroll-bar-width", `${scrollbarWidth}px`);

			// update variables at root element
			vw100 && setCSSVariable(htmlTag, "--100vw", `${vw100}px`);

			// update gap side
			setCSSVariable(htmlTag, "--gap-side", `${gapSize}px`);

			// container size
			container &&
				gapContainer &&
				setCSSVariable(
					htmlTag,
					"--container",
					`${container - gapContainer * 2}px`
				);
		};

		updateCSSVariables();
		window.addEventListener("resize", updateCSSVariables);

		return () => {
			window.removeEventListener("resize", updateCSSVariables);
		};
	}, []);

	return null;
}
