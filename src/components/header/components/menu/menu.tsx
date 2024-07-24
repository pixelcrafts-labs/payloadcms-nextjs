import Item from "./menu-item";
import { cloneElement, type ReactElement } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
	items: ReactElement<typeof Item>[];
	isSubMenu?: boolean;
	title?: string;
};

export default function Menu({ items, isSubMenu = false, title = "" }: Props) {
	const Tag = isSubMenu ? "li" : "div";

	return (
		<Tag
			className={`${isSubMenu ? "header__menu-item has-children" : "header__menu-wrapper"}`}
		>
			{isSubMenu && (
				<button className="header__menu-link">
					<span>{title}</span>
					<ChevronDown size={14} className="header__chevron" />
				</button>
			)}
			<ul className={`${isSubMenu ? "header__sub-menu" : "header__menu"}`}>
				{items.map((item, index) =>
					cloneElement(item, { ...item.props, key: index })
				)}
			</ul>
		</Tag>
	);
}
