import { useLocation, useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "../../hooks/types";

export default function ProductDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state as Product | undefined;

  if (!product) {
    return (
      <div className="text-center text-white mt-20">
        <p>⚠️ Product data not found!</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-5 text-white">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-[400px] rounded-xl shadow-lg object-contain"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3">{product.title}</h2>
          <p className="text-yellow-400 mb-2">⭐ {product.rating}</p>
          <p className="text-lg mb-5">{product.description}</p>
          <p className="text-2xl font-bold mb-5 text-red-400">Rs. {product.price}/-</p>

          <div className="w-[200px]">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
