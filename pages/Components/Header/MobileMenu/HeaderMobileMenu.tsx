import { type RefObject, useRef } from "react";

function HeaderMobileMenu({
  mobileMenuOpen,
}: {
  mobileMenuOpen: RefObject<HTMLDivElement>;
}) {
  const mobileMenuClose = useRef<HTMLDivElement>(null);

  const closeMobileMenuHandler = () => {
    if (mobileMenuOpen.current) {
      mobileMenuOpen.current.classList.remove("flex");
      mobileMenuOpen.current.classList.add("hidden");
    }
  };

  return (
    <nav
      ref={mobileMenuOpen}
      className="hidden w-full fixed animate-menu inset-0 bg-black bg-opacity-70 z-50 flex-col gap-20 items-center justify-center"
    >
      <section
        ref={mobileMenuClose}
        onClick={closeMobileMenuHandler}
        className="flex items-center justify-start absolute top-20 right-20"
      >
        <button className="h-20 w-20 text-4xl border rounded border-white text-white hover:scale-105 transition duration-700">
          x
        </button>
      </section>
      <section className="flex">
        <ul className="flex justify-center items-start flex-col gap-5 text-2xl text-white space-y-4">
          <li className="text-5xl">O projekcie</li>
          <li className="text-5xl">Funkcje</li>
          <li className="text-5xl">Cennik</li>
          <li className="text-5xl">FAQ</li>
        </ul>
      </section>
      <section className="flex items-center justify-start">
        <button className="h-20 w-60 text-3xl border rounded border-white text-white hover:scale-105 transition duration-700">
          Docs
        </button>
      </section>
    </nav>
  );
}

export default HeaderMobileMenu;
