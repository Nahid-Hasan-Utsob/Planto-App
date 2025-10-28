import Hero_Card from "./Hero_Card";
import { useProducts } from "../hooks/useProducts";
export default function Hero_Cards() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products.</p>;

  return (
    <div className="flex lg:flex-col lg:gap-28 gap-2 items-center">
      {products &&
        products.slice(0, 2).map((product, idx) => (
          <Hero_Card
            key={product.id}
            data={{
              title: product.title,
              description: product.description,
              image: product.images[0] || product.thumbnail,
              price: product.price,
              rating: product.rating,
            }}
            reverse={idx % 2 !== 0} // alternate reverse
          />
        ))}
    </div>
  );
}
