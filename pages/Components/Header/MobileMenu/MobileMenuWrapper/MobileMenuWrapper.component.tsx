import { ReactNode, RefObject } from "react";

function MobileMenuWrapper({
  children,
  mobileMenuOpen,
}: {
  children: ReactNode;
  mobileMenuOpen: RefObject<HTMLDivElement>;
}) {
  return (
    <nav
      ref={mobileMenuOpen}
      className="hidden w-full fixed animate-menu inset-0 bg-black bg-opacity-80 z-50 flex-col gap-10 items-center justify-center"
    >
      {children}
    </nav>
  );
}

export default MobileMenuWrapper;
