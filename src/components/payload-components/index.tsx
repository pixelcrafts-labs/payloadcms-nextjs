import React, { Fragment } from "react";
import Content from "./content";
import ImageContent from "./image-content";
import type { Page } from "@/payload/payload-types";

type Props = {
	components: Page["components"];
};

const CUSTOM_COMPONENTS = [
	{
		name: "image-content",
		component: (props: any) => <ImageContent {...props} />,
	},
	{
		name: "content",
		component: (props: any) => <Content {...props} />,
	},
];

export default function PayloadComponents({ components }: Props) {
	return (
		<>
			{components
				?.map((c) => {
					const { blockType } = c;
					const data = (c as any)[blockType];

					// find corresponding component
					const result = CUSTOM_COMPONENTS.find(
						(custom) => custom.name === blockType
					);

					// invalid component
					if (!result) return null;

					const { component } = result;
					return <Fragment key={blockType}>{component(data)}</Fragment>;
				})
				.filter(Boolean)}
		</>
	);
}
