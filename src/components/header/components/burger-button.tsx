import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement>;

export default function BurgerButton({ className, ...props }: Props) {
	return (
		<Button
			{...props}
			variant={"outline"}
			size={"icon"}
			className={cn(className, "lg:hidden burger-button")}
		>
			<span>
				<span className="sr-only">Burger Line</span>
			</span>
			<span>
				<span className="sr-only">Burger Line</span>
			</span>
			<span>
				<span className="sr-only">Burger Line</span>
			</span>
		</Button>
	);
}
