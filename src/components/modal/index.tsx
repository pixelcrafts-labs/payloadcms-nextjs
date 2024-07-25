"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import ModalOverlay from "./overlay";
import ModalContainer from "./container";
import ModalTrigger from "./modal-trigger";

type ModalState = {
	isOpen: boolean;
	toggle: () => void;
	onAnimationComplete: () => void;
};

const initialState: ModalState = {
	isOpen: false,
	toggle: () => {},
	onAnimationComplete: () => {},
};

const ModalContext = createContext<ModalState>(initialState);

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (context === undefined)
		throw new Error("useToggleContext must be used within a ToggleProvider");

	return context;
};

export default function Modal({
	children,
	open = false,
}: {
	children: ReactNode;
	open?: boolean;
}) {
	const [isOpen, _setIsOpen] = useState(false);
	const [isAnimating, _setIsAnimating] = useState(false);

	useEffect(() => {
		_setIsOpen(open);
	}, [open]);

	useEffect(() => {
		if (!isOpen) {
			document.body.classList.remove("overflow-hidden");
			return;
		}
		document.body.classList.add("overflow-hidden");
	}, [isOpen]);

	const value = {
		isOpen,
		toggle: () => {
			if (isAnimating) return;
			_setIsOpen(!isOpen);
			_setIsAnimating(true);
		},
		onAnimationComplete: () => {
			_setIsAnimating(false);
		},
	};

	return (
		<ModalContext.Provider value={value}>
			{children}
			{<ModalOverlay />}
		</ModalContext.Provider>
	);
}

Modal.Trigger = ModalTrigger;
Modal.Container = ModalContainer;
