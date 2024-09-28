import React, { type ReactNode } from "react";

function HomeCtaWrapper({ children }: { children: ReactNode }) {
  return <section className="h-3/4 lg:flex lg:flex-col lg:w-1/3">{children}</section>;
}

export default HomeCtaWrapper;
