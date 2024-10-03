import { type ReactNode } from "react";

function AboutWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-full mb-52 flex justify-center items-center p-5 m-auto mt-52 z-10 relative lg:w-3/4">
      {children}
    </section>
  );
}

export default AboutWrapper;
