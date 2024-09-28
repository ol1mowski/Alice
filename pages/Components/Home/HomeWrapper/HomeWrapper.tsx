import { type ReactNode } from "react";

function HomeWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full flex-col h-full p-5 lg:flex-row justify-center xl:p-main 2xl:gap-20">
      {children}
    </main>
  );
}

export default HomeWrapper;
