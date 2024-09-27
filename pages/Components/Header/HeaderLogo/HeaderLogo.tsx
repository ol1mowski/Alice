import Image from "next/image";


function HeaderLogo() {
  return (
    <section className="flex justify-center items-center">
      <Image
        className="cursor-pointer transition duration-700 hover:scale-110"
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450173/AliceLogo_ueltaa.svg"
        }
        alt="Alice Logo"
        width={125}
        height={125}
      />
    </section>
  );
}

export default HeaderLogo;
