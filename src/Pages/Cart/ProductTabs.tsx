
import { useState } from "react";
import type { Product } from "../../hooks/types";

interface Props {
  product: Product;
}

export default function ProductTabs({ product }: Props) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const reviewsSafe = Array.isArray(product.reviews) ? product.reviews : [];

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Tab Buttons */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === "description"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === "reviews"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Reviews ({reviewsSafe.length})
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px] md:min-h-[400px] p-4  ">
        {activeTab === "description" && (
          <div className="bg-red-300">
            <h3 className="text-xl font-bold mb-2">Product Description</h3>
            <p className="text-gray-700">{product.description || "No description available."}</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="">
            {reviewsSafe.length === 0 ? (
              <p className="italic text-gray-500">No reviews yet.</p>
            ) : (
              <ul className="grid md:grid-cols-2 gap-4">
                {reviewsSafe.map((r, i) => (
                  <li
                    key={i}
                    className="border border-gray-300 rounded-lg p-3 bg-gray-200 shadow hover:shadow-md transition"
                  >
                    <p className="font-bold">{r.reviewerName || "Anonymous"}</p>
                    <p className="text-gray-500 text-sm">{r.reviewerEmail || "-"}</p>
                    <p className="text-yellow-400 my-1">
                      {Array.from({ length: 5 }, (_, idx) => (
                        <span key={idx}>{r.rating > idx ? "★" : "☆"}</span>
                      ))}
                    </p>
                    <p className="text-gray-700">{r.comment || "-"}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
