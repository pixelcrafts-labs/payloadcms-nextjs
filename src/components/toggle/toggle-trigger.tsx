import type { ReactNode } from "react";
import { useToggleContext } from ".";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type TriggerProps = {
	children: ReactNode;
	asChild: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function ToggleTrigger({
	asChild = false,
	className = "",
	...props
}: TriggerProps) {
	const { toggle, isOpen } = useToggleContext();
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			{...props}
			onClick={toggle}
			className={cn(className, isOpen && "active")}
		/>
	);
}
