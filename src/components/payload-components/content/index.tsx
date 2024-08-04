import RichText from "@/components/rich-text";

type Props = {
	content: any;
};

export default function Content({ content }: Props) {
	return (
		<>
			<RichText content={content} />
		</>
	);
}
