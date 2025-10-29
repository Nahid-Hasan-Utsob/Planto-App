// src/Pages/Products/All_ProductList.tsx
import React, { useMemo, useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import Main_Product_Card from "../../components/Main_Product_Card";
import { useSearchParams } from "react-router-dom";

const All_ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const initialSort = searchParams.get("sort") ?? "none";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortOption, setSortOption] = useState<string>(initialSort);

  useEffect(() => {
    const cat = searchParams.get("category") ?? "All";
    const sort = searchParams.get("sort") ?? "none";
    setSelectedCategory(cat);
    setSortOption(sort);
  }, [searchParams]);

  const categories = useMemo(() => {
    if (!products) return ["All"];
    return ["All", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortOption) {
      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "az":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return sorted;
  }, [filteredProducts, sortOption]);

  if (isLoading)
    return <p className="text-center text-white mt-10">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error loading products!</p>;
  if (!products || products.length === 0)
    return <p className="text-center text-white mt-10">No products found.</p>;

  return (
    <div className="text-white flex flex-col lg:flex-row gap-6 px-5 md:px-10 py-10 max-w-7xl mx-auto">
      {/* 🧭 Left Sidebar (Categories) */}
      <aside className="lg:w-1/4 bg-[#1f2d1c]/30 backdrop-blur-md rounded-2xl p-5 h-fit">
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-2">
          Categories
        </h2>
        <ul className="space-y-2 text-base">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                setSelectedCategory(cat ?? "All");
                const params: Record<string, string> = {};
                if (cat && cat !== "All") params.category = cat;
                if (sortOption && sortOption !== "none") params.sort = sortOption;
                setSearchParams(params);
              }}
              className={`cursor-pointer px-3 py-1 rounded-md transition-all ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-black font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* 🏷️ Right Side (Products + Sorting) */}
      <section className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>

          <select
            onChange={(e) => {
              setSortOption(e.target.value);
              const params: Record<string, string> = {};
              if (selectedCategory && selectedCategory !== "All")
                params.category = selectedCategory;
              if (e.target.value && e.target.value !== "none") params.sort = e.target.value;
              setSearchParams(params);
            }}
            value={sortOption}
            className="bg-transparent border border-gray-500 text-white px-3 py-1 rounded-md focus:outline-none"
          >
            <option value="none">Sort by</option>
            <option value="price-low-high">Price: Low → High</option>
            <option value="price-high-low">Price: High → Low</option>
            <option value="rating">Top Rated</option>
            <option value="az">Name (A-Z)</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {sortedProducts.map((p) => (
            <Main_Product_Card key={p.id} products={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default All_ProductList;
