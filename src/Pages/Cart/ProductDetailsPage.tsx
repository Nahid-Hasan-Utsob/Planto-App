import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { useProducts } from "../../hooks/useProducts";
import ProductRightSection from "./ProductRightSection";
import ProductTabs from "./ProductTabs";

export default function ProductDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const selectedProductId = (state as { id: number } | undefined)?.id;

  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <Loader />;
  if (error) return <p className="text-center text-red-500 mt-10">Error loading products!</p>;
  if (!products || products.length === 0) return <p className="text-center text-white mt-10">No products found.</p>;

  const product = products.find((p) => p.id === selectedProductId);

  if (!product) {
    return (
      <div className="text-center text-white mt-20">
        <p>⚠️ Product not found!</p>
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
    <div className="min-h-screen flex flex-col  text-white">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto flex-1 p-5 gap-10">
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-lg object-contain rounded-xl "
          />
        </div>

        {/* Right Details */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <ProductRightSection product={product} />
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className=" text-black mt-5 w-full">
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
