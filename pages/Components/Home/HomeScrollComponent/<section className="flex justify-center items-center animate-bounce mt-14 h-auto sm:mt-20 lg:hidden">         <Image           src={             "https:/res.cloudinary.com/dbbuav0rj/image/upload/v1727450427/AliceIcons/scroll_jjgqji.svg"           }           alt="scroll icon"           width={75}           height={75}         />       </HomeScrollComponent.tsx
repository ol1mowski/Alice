import Image from "next/image";

function HomeScrollComponent() {
  return (
    <section className="flex justify-center items-center animate-bounce mt-14 h-auto sm:mt-20 lg:hidden">
      <Image
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/scroll_jjgqji.svg"
        }
        alt="scroll icon"
        width={75}
        height={75}
      />
    </section>
  );
}

export default HomeScrollComponent;
