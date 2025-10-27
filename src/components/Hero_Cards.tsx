import Hero_Card from "./Hero_Card";
import product from "../assets/product.png";
export default function Hero_Cards() {
  const cardList = [
    {
      title: "For Small Decs Ai Plat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: product,
      price: 599
        },
    {
      title: "For Fresh Decs Ai Plat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: product,
        price: 598
    },
  ];

  return (
    <div className="flex flex-col gap-28 items-center">
      <Hero_Card data={cardList[0]} />
      <Hero_Card data={cardList[1]} reverse={true} />
    </div>
  );
}
