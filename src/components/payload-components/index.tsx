import React, { Fragment } from "react";
import type { Page } from "@/payload/payload-types";
import ContentComponent from "./content";
import ImageContentComponent from "./image-content";

import { ImageContent } from "@cms/blocks/ImageContent";
import { Content } from "@cms/blocks/Content";

type Props = {
	components: Page["components"];
};

const CUSTOM_COMPONENTS = [
	{
		name: ImageContent.slug,
		component: (props: any) => <ImageContentComponent {...props} />,
	},
	{
		name: Content.slug,
		component: (props: any) => <ContentComponent {...props} />,
	},
];

export default function PayloadComponents({ components }: Props) {
	return (
		<>
			{components
				?.map((c, index) => {
					const { blockType, options } = c;
					const data = (c as any)[blockType];

					// find corresponding component
					const result = CUSTOM_COMPONENTS.find(
						(custom) => custom.name === blockType
					);

					// invalid component
					if (!result) return null;

					const { component } = result;
					return (
						<Fragment key={blockType + index}>
							{component({ ...data, options })}
						</Fragment>
					);
				})
				.filter(Boolean)}
		</>
	);
}
