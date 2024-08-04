import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"div">;

export default function Container({ className, ...props }: Props) {
	return <div {...props} className={cn("container", className)} />;
}
