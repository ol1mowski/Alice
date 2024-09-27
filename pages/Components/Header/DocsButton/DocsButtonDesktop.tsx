import Image from "next/image";

export default function DocsButton() {
  return (
    <section className="hidden lg:flex items-center justify-start">
      <button className="flex justify-center items-center gap-2 h-14 w-36 font-bold text-xl rounded border-2 border-purple text-black hover:scale-105 transition duration-700">
        Docs
        <Image
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450439/AliceIcons/resources_nvjkl2.svg"
          }
          alt="Alice Logo"
          width={25}
          height={25}
        />
      </button>
    </section>
  );
}
