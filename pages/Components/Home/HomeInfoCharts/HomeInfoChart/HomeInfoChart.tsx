import CounterAnimation from "@/pages/UI/Counter.animation";

function HomeInfoChart({
  stringFirst,
  stringSecond,
  number,
}: {
  stringFirst: string;
  stringSecond: string;
  number: number;
}) {
  return (
    <div className="flex flex-col min-w-32">
      <span className="font-bold text-black text-4xl 2xl:text-5xl">
        +
        <CounterAnimation duration={7000} target={number} />
      </span>
      <span className="text-l sm:text-2xl sm:font-extralight lg:text-xl">
        {stringFirst} <br /> {stringSecond}
      </span>
    </div>
  );
}

export default HomeInfoChart;
