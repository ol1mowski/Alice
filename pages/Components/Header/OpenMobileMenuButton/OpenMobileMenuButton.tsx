import { type RefObject } from "react";

function OpenMobileMenuButton({
  mobileMenuOpen,
}: {
  mobileMenuOpen: RefObject<HTMLDivElement>;
}) {
  const openMobileMenuHandler = () => {
    if (mobileMenuOpen.current) {
      mobileMenuOpen.current.classList.remove("hidden");
      mobileMenuOpen.current.classList.add("flex");
    }
  };

  return (
    <section
      onClick={openMobileMenuHandler}
      className="flex items-start justify-center flex-col gap-2 transition duration-700 hover:items-end hover:scale-110 cursor-pointer lg:hidden"
    >
      <div className="bg-black h-1 w-10 rounded"></div>
      <div className="bg-black h-1 w-5 rounded"></div>
      <div className="bg-black h-1 w-10 rounded"></div>
    </section>
  );
}

export default OpenMobileMenuButton;
