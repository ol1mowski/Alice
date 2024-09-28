import { type ReactNode } from "react";


function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <header className="w-screen flex items-end justify-around mt-10 relative z-10">
      {children}
    </header>
  );
}

export default HeaderWrapper;


