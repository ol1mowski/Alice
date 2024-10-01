import { type RefObject } from "react";

import MobileMenuClose from "./MobileMenuClose/MobileMenuClose.component";
import MobileNavList from "./MobileNavList/MobileNavList.component";
import MobileMenuDocsBtn from "./MobileMenuDocsBtn/MobileMenuDocsBtn.component";
import MobileMenuWrapper from "./MobileMenuWrapper/MobileMenuWrapper.component";

function HeaderMobileMenu({
  mobileMenuOpen,
}: {
  mobileMenuOpen: RefObject<HTMLDivElement>;
}) {
  return (
    <MobileMenuWrapper mobileMenuOpen={mobileMenuOpen}>
      <MobileMenuClose mobileMenuOpen={mobileMenuOpen} />
      <MobileNavList />
      <MobileMenuDocsBtn />
    </MobileMenuWrapper>
  );
}

export default HeaderMobileMenu;