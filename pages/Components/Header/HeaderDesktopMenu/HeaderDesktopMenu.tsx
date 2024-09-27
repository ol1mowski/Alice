function HeaderDesktopMenu() {
  return (
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
  );
}

export default HeaderDesktopMenu;
