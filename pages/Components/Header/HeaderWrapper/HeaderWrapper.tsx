import { type ReactNode } from "react";


function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <header className="w-screen border-b-2 pb-10 rounded border-gray-200 flex items-end justify-around mt-10 relative z-10">
      {children}
    </header>
  );
}

export default HeaderWrapper;


