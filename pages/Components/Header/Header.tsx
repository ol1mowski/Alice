import { useRef } from "react";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderDesktopMenu from "./HeaderDesktopMenu/HeaderDesktopMenu";
import DocsButton from "./DocsButton/DocsButtonDesktop";
import HeaderMobileMenu from "./MobileMenu/HeaderMobileMenu";
import OpenMobileMenuButton from "./OpenMobileMenuButton/OpenMobileMenuButton";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper";

function Header() {
  const mobileMenuOpen = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderWrapper>
        <Header.logo />
        <Header.desktopMenu />
        <Header.docsButton />
        <Header.mobileMenu mobileMenuOpen={mobileMenuOpen} />
        <Header.openMobileMenu mobileMenuOpen={mobileMenuOpen} />
      </HeaderWrapper>
    </>
  );
}

export default Header;

Header.logo = HeaderLogo;
Header.desktopMenu = HeaderDesktopMenu;
Header.docsButton = DocsButton;
Header.mobileMenu = HeaderMobileMenu;
Header.openMobileMenu = OpenMobileMenuButton;
