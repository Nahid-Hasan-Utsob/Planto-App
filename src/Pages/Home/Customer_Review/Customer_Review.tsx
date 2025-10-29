import ReviewCard from "../../../components/Review_Card";
import type { Review } from "../../../hooks/types";
import { useProducts } from "../../../hooks/useProducts";

export default function Customer_Review() {
  const { data: products = [], isLoading, error } = useProducts();

  if (isLoading) return <p>Loading Products...</p>;
  if (error instanceof Error)
    return <p>Failed to load Products: {error.message}</p>;

  // top-rated reviews filter + safety
  const topReviews: { review: Review; productTitle: string }[] = [];

  products.forEach((product) => {
    if (!product.reviews) return; // safety
    const filtered = product.reviews.filter((rev) => rev.rating >= 3);

    filtered.slice(0, 3).forEach((rev) => {
      topReviews.push({ review: rev, productTitle: product.title });
    });
  });

  if (topReviews.length === 0) return <p>No top reviews found</p>;
  return (
    <div
      className="
      grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      lg:gap-5 
      justify-items-center  /* ✅ এই লাইনটা যোগ করো */
      items-center 
      mx-auto               /* ✅ পুরো grid কে center রাখবে */
    "
    >
      {topReviews.slice(0, 3).map((item, idx) => (
        <ReviewCard
          key={`${item.productTitle}-${idx}`}
          review={item.review}
          productTitle={item.productTitle}
        />
      ))}
    </div>
  );
}
