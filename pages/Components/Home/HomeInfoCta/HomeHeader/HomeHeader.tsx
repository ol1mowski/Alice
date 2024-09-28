import TypingAnimation from "@/pages/UI/Typing.animation";
import React from "react";

function HomeHeader() {
  return (
    <h1 className="text-5xl leading-tight font-semibold md:text-7xl lg:text-6xl 2xl:text-7xl">
      <TypingAnimation textValue="Poznaj nasze najnowsze rozwiązanie " />
      <span className="text-purple">AI</span>
    </h1>
  );
}

export default HomeHeader;
