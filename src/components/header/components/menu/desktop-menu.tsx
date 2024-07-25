import { ReactNode } from "react";

type Props = {
	menuItems: ReactNode;
};

export default function DesktopMenu({ menuItems }: Props) {
	return <div className="desktop-menu">{menuItems}</div>;
}
