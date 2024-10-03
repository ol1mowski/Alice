import Image from "next/image";
import React from "react";

function AboutProject() {
  return (
    <section className="w-full flex justify-center items-center p-5 mt-10 z-10 relative">
      <Image
        className="absolute top-0 left-0 z-0"
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727943340/AliceIcons/alice_circle_b0youc.svg"
        }
        alt="circle icon"
        width={100}
        height={100}
      />
      <p className="text-4xl font-code text-center relative z-10 mt-5">
        Alice to projekt <span className="text-purple">Chatbota</span> służący
        do <span className="text-green">interakcji z użytkownikami</span> za
        pomocą technologii przetwarzania języka naturalnego. Alice przyśpieszy
        twoją pracę o nawet <span className="text-5xl text-pink-400">100%</span>{" "}
        oraz pomoże zaoszczędzić Ci{" "}
        <span className="text-blue-300">kilka godzin dziennie</span>
      </p>
      <Image
        className="absolute bottom-0 right-0 z-0"
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727943340/AliceIcons/alice_circle_b0youc.svg"
        }
        alt="circle icon"
        width={100}
        height={100}
      />
    </section>
  );
}

export default AboutProject;
