"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import ToggleTrigger from "./toggle-trigger";

type ToggleState = {
	isOpen: boolean;
	toggle: () => void;
};

const initialState: ToggleState = {
	isOpen: false,
	toggle: () => {},
};

const ToggleContext = createContext<ToggleState>(initialState);

export const useToggleContext = () => {
	const context = useContext(ToggleContext);

	if (context === undefined)
		throw new Error("useToggleContext must be used within a ToggleProvider");

	return context;
};

export default function Toggle({
	children,
	open = true,
}: {
	children: ReactNode;
	open?: boolean;
}) {
	const [isOpen, setIsOpen] = useState(open);

	const value = {
		isOpen,
		toggle: () => {
			setIsOpen((prevState) => !prevState);
		},
	};

	return (
		<ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
	);
}

Toggle.Trigger = ToggleTrigger;
