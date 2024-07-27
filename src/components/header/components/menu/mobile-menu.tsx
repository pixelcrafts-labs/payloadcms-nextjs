"use client";

import Modal, { useModalContext } from "@/components/modal";
import { debounce } from "@/lib/utils";
import { useEffect, type ReactNode } from "react";
import BurgerButton from "./burger-button";

type Props = {
	menuItems: ReactNode;
};

const CloseMenuOnMobile = () => {
	const { toggle, isOpen } = useModalContext();

	useEffect(() => {
		const handleResize = debounce(() => {
			// automatically close the menu when resizing
			if (isOpen) toggle();
		});
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return null;
};

export default function MobileMenu({ menuItems }: Props) {
	return (
		<Modal>
			<Modal.Trigger asChild>
				<BurgerButton />
			</Modal.Trigger>
			<Modal.Container>
				<div className="pt-header-height">
					<div className="p-gap-container mobile-menu">{menuItems}</div>
				</div>
			</Modal.Container>
			<Modal.Overlay />
			<CloseMenuOnMobile />
		</Modal>
	);
}
