import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useModalContext } from ".";
import useMounted from "@/hooks/useMounted";

export default function ModalOverlay() {
	const { isOpen, toggle, onAnimationComplete } = useModalContext();
	const { isMounted } = useMounted();

	return (
		isMounted &&
		createPortal(
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						exit={{ opacity: 0 }}
						onAnimationComplete={onAnimationComplete}
					>
						<div
							className="fixed top-0 left-0 z-10 right-0 bottom-0 bg-black"
							onClick={toggle}
						>
							<span className="sr-only">Modal overlay</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>,
			document.querySelector("#modal")!
		)
	);
}
