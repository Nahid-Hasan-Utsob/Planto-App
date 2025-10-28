import { useProducts } from "../../hooks/useProducts";

export default function ProductList() {
const { data: products = [], isLoading, error } = useProducts();

console.log({ products, isLoading, error });


  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">All Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((p: any) => (
          <div
            key={p.id}
            className="border rounded p-3 m-2 shadow hover:shadow-lg transition-all duration-200 text-white"
          >
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="text-white">${p.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
