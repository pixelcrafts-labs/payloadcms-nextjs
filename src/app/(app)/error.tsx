"use client";

import { Button } from "@/components/ui/button";

type Props = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function Error({ error, reset }: Props) {
	return (
		<div className="flex flex-col items-center gap-y-4">
			<h2 className="text-lg">Something went wrong!</h2>
			{error.message ? (
				<span className="font-normal text-sm">{error.message}</span>
			) : null}
			<Button onClick={() => reset()} size="sm">
				Try again
			</Button>
		</div>
	);
}
