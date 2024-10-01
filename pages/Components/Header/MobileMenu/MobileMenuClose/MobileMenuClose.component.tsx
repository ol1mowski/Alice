import React, { RefObject, useRef } from "react";

function MobileMenuClose({ mobileMenuOpen } : { mobileMenuOpen: RefObject<HTMLDivElement>}) {
  const mobileMenuClose = useRef<HTMLDivElement>(null);

  const closeMobileMenuHandler = () => {
    if (mobileMenuOpen.current) {
      mobileMenuOpen.current.classList.remove("flex");
      mobileMenuOpen.current.classList.add("hidden");
    }
  };

  return (
    <section
      ref={mobileMenuClose}
      onClick={closeMobileMenuHandler}
      className="flex items-center justify-start absolute top-20 right-20"
    >
      <button className="h-14 w-14 text-4xl border rounded border-white text-white hover:scale-105 transition duration-700">
        x
      </button>
    </section>
  );
}

export default MobileMenuClose;
