import Image from "next/image";

function HomeImage() {
  return (
    <section className="hidden lg:flex lg:w-2/3 2xl:ml-10 2xl:w-1/2">
      <Image
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727523443/AliceImage/aliceMainImage_jzkp7e.webp"
        }
        alt="alice main image"
        width={300}
        height={300}
        className="w-11/12 h-11/12 max-w-2xl lg:max-h-mainImage lg:max-w-mainImage"
      />
    </section>
  );
}

export default HomeImage;
