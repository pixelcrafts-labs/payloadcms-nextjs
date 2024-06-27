import Image from "next/image";
import ColorModeSwitcher from "./color-mode-switcher";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-5 min-h-[var(--header-height)] shadow-sm">
      <Link href={"/"} className="relative inline-block aspect-[300/68] w-20">
        <Image
          src="/vercel.svg"
          alt="header-logo"
          fill
          className="object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        />
      </Link>
      <ColorModeSwitcher />
    </div>
  );
}
