import type { ReactNode } from "react";
import { useModalContext } from ".";
import { createPortal } from "react-dom";
import useMounted from "@/hooks/useMounted";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalContainer({ children }: { children: ReactNode }) {
	const { isOpen } = useModalContext();
	const { isMounted } = useMounted();

	return (
		isMounted &&
		createPortal(
			<AnimatePresence mode="wait">
				{isOpen && (
					<div className="fixed top-0 right-0 z-20 h-full w-full sm:w-96">
						<motion.div
							initial={{ x: "100%", opacity: 0, height: "100%" }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ ease: "easeInOut" }}
						>
							<div className="h-full bg-background">{children}</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>,
			document.querySelector("#modal")!
		)
	);
}
