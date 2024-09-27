import { type ReactNode } from "react";


function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <header className="flex items-end justify-around pt-2 relative z-10">
      {children}
    </header>
  );
}

export default HeaderWrapper;


