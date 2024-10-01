import { useRef } from "react";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderDesktopMenu from "./HeaderDesktopMenu/HeaderDesktopMenu";
import DocsButton from "./DocsButton/DocsButtonDesktop";
import HeaderMobileMenu from "./MobileMenu/HeaderMobileMenu.component";
import OpenMobileMenuButton from "./OpenMobileMenuButton/OpenMobileMenuButton";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper";

function Header() {
  const mobileMenuOpen = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderWrapper>
        <HeaderLogo />
        <HeaderDesktopMenu />
        <DocsButton />
        <HeaderMobileMenu mobileMenuOpen={mobileMenuOpen} />
        <OpenMobileMenuButton mobileMenuOpen={mobileMenuOpen} />
      </HeaderWrapper>
    </>
  );
}

export default Header;
