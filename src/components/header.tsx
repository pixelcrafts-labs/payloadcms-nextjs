import Image from "next/image";
import ColorModeSwitcher from "./color-mode-switcher";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-background flex justify-between items-center px-5 min-h-[var(--header-height)] shadow-sm">
      <div className="relative aspect-[300/68] w-20">
        <Image
          src="/vercel.svg"
          alt="header-logo"
          fill
          className="object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        />
      </div>
      <ColorModeSwitcher />
    </div>
  );
}
