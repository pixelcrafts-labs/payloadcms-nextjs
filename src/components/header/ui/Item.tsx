type Props = {
	title: string;
	url: string;
};

export default function Item({ title, url }: Props) {
	return (
		<li className="header__menu-item">
			<a className="header__menu-link flex items-center" href={url}>
				{title}
			</a>
		</li>
	);
}
