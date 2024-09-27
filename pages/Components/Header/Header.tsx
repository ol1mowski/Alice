import Image from "next/image";
import { useRef } from "react";

function Header() {
  const mobileMenuOpen = useRef<HTMLDivElement>(null);
  const mobileMenuClose = useRef<HTMLDivElement>(null);

  const openMobileMenuHandler = () => {
    if (mobileMenuOpen.current) {
      mobileMenuOpen.current.classList.remove("hidden");
      mobileMenuOpen.current.classList.add("flex");
    }
  };

  const closeMobileMenuHandler = () => {
    if (mobileMenuOpen.current) {
      mobileMenuOpen.current.classList.remove("flex");
      mobileMenuOpen.current.classList.add("hidden");
    }
  };

  return (
    <header className="flex items-end justify-around pt-2 relative z-10">
      <section className="flex justify-center items-center">
        <Image
        className="cursor-pointer transition duration-700 hover:scale-110"
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450173/AliceLogo_ueltaa.svg"
          }
          alt="Alice Logo"
          width={125}
          height={125}
        />
      </section>

      <nav className="hidden lg:flex">
        <section className="flex justify-center items-center">
          <ul className="flex justify-center items-start gap-20 text-2xl">
            <li className="text-2xl cursor-pointer transition-all hover:scale-110">
              O projekcie
            </li>
            <li className="text-2xl cursor-pointer transition-all hover:scale-110">
              Funkcje
            </li>
            <li className="text-2xl cursor-pointer transition-all hover:scale-110">
              Cennik
            </li>
            <li className="text-2xl cursor-pointer transition-all hover:scale-110">
              FAQ
            </li>
          </ul>
        </section>
      </nav>

      <section className="hidden lg:flex items-center justify-start">
        <button className="flex justify-center items-center gap-2 h-14 w-36 font-bold text-xl rounded border-2 border-purple text-black hover:scale-105 transition duration-700">
          Docs
          <Image
            src={
              "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450439/AliceIcons/resources_nvjkl2.svg"
            }
            alt="Alice Logo"
            width={25}
            height={25}
          />
        </button>
      </section>

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

      <section
        onClick={openMobileMenuHandler}
        className="flex items-start justify-center flex-col gap-2 transition duration-700 hover:items-end hover:scale-110 cursor-pointer lg:hidden"
      >
        <div className="bg-black h-1 w-10 rounded"></div>
        <div className="bg-black h-1 w-5 rounded"></div>
        <div className="bg-black h-1 w-10 rounded"></div>
      </section>
    </header>
  );
}

export default Header;
