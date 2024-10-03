import Image from 'next/image'

function AboutIcon({ className }: { className: string}) {
  return (
    <Image
        className={className}
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727943340/AliceIcons/alice_circle_b0youc.svg"
        }
        alt="circle icon"
        width={100}
        height={100}
      />
  )
}

export default AboutIcon
