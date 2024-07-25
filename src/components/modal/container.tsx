import type { HTMLAttributes, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from ".";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useMounted from "@/hooks/useMounted";

type Props = {
	children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function ModalContainer({
	children,
	className,
	...props
}: Props) {
	const { isOpen } = useModalContext();
	const { isMounted } = useMounted();

	return (
		isMounted &&
		createPortal(
			<AnimatePresence mode="wait">
				{isOpen && (
					<div
						className={cn(
							"fixed top-0 right-0 z-20 h-full w-full sm:w-96",
							className
						)}
						{...props}
					>
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
