// src/Pages/Products/All_ProductList.tsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import All_Product_Card from "./All_Product_Card";

const All_ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const initialSort = searchParams.get("sort") ?? "none";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortOption, setSortOption] = useState<string>(initialSort);

  const [openDropdown, setOpenDropdown] = useState<"category" | "sort" | null>(null);

  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const mobileCategoryRef = useRef<HTMLDivElement>(null);
  const mobileSortRef = useRef<HTMLDivElement>(null);

  // Sync state with URL
  useEffect(() => {
    const cat = searchParams.get("category") ?? "All";
    const sort = searchParams.get("sort") ?? "none";
    setSelectedCategory(cat);
    setSortOption(sort);
  }, [searchParams]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        openDropdown === "category" &&
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node) &&
        mobileCategoryRef.current &&
        !mobileCategoryRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
      if (
        openDropdown === "sort" &&
        sortRef.current &&
        !sortRef.current.contains(e.target as Node) &&
        mobileSortRef.current &&
        !mobileSortRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const categories = useMemo(() => {
    if (!products) return ["All"];
    const cats = products
      .map((p) => p.category)
      .filter((c): c is string => typeof c === "string");
    return ["All", ...Array.from(new Set(cats))];
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

  const updateSearchParams = (cat: string, sort: string) => {
    const params: Record<string, string> = {};
    if (cat && cat !== "All") params.category = cat;
    if (sort && sort !== "none") params.sort = sort;
    setSearchParams(params);
  };

  if (isLoading)
    return <p className="text-center text-white mt-10">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error loading products!</p>;
  if (!products || products.length === 0)
    return <p className="text-center text-white mt-10">No products found.</p>;

  return (
    <div className="relative min-h-screen">
      {openDropdown && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-10 transition-all duration-200"
          onClick={() => setOpenDropdown(null)}
        />
      )}

      <div className="relative z-20 text-white flex flex-col lg:flex-row gap-6 md:px-10 pt-10">
        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 bg-white/30 backdrop-blur-md rounded-2xl p-5 h-fit shadow-lg">
          <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-2">
            Categories
          </h2>
          <ul className="space-y-2 md:text-base text-xs">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  updateSearchParams(cat, sortOption);
                }}
                className={`cursor-pointer md:px-3 md:py-1 rounded-md transition-all ${
                  selectedCategory === cat
                    ? "bg-yellow-400 rounded-2xl text-black"
                    : "hover:bg-white/10"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Section */}
        <section className="flex-1">
          {/* Mobile Filters */}
          <div className="lg:hidden flex gap-3 mb-10">
            {/* Category Dropdown */}
            <div ref={mobileCategoryRef} className="relative flex-1">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "category" ? null : "category")
                }
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white 
                           px-3 md:py-2 py-1 rounded-md text-center flex justify-between items-center
                           focus:outline-none focus:ring-2 transition"
              >
                <span className="text-[13px] md:text-[13px]">{selectedCategory}</span>
                <svg
                  className={`md:w-4 h-4 transition-transform ${
                    openDropdown === "category" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "category" && (
                 <ul className="absolute top-full mt-1 w-full bg-green-800/50 backdrop-blur-md border p-1 border-white/20 rounded-md text-[13px] md:text-[15px]  scroll-auto shadow-lg z-50  overflow-y-auto">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        updateSearchParams(cat, sortOption);
                        setOpenDropdown(null);
                      }}
                      className={`px-3 py-2 cursor-pointer transition-all ${
                        selectedCategory === cat
                          ? "bg-yellow-400 text-black"
                          : "hover:bg-white/20"
                      }`}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Sort Dropdown */}
            <div ref={mobileSortRef} className="relative flex-1">
              <button
                onClick={() => setOpenDropdown(openDropdown === "sort" ? null : "sort")}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white 
                           px-3 md:py-2 py-1 rounded-md text-center flex justify-between items-center
                           focus:outline-none focus:ring-2 transition"
              >
                <span className="text-[13px] md:text-[13px]">
                  {sortOption === "none"
                    ? "Sort by"
                    : sortOption === "price-low-high"
                    ? "Price: Low to High"
                    : sortOption === "price-high-low"
                    ? "Price: High to Low"
                    : sortOption === "rating"
                    ? "Top Rated"
                    : "Name (A-Z)"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === "sort" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "sort" && (
                 <ul className="absolute top-full mt-1 w-full bg-green-800/50 backdrop-blur-md border p-1 border-white/20 rounded-md text-[13px] md:text-[15px]  scroll-auto shadow-lg z-50  overflow-y-auto">
                  {[
                    { value: "none", label: "Sort by" },
                    { value: "price-low-high", label: "Price: Low to High" },
                    { value: "price-high-low", label: "Price: High to Low" },
                    { value: "rating", label: "Top Rated" },
                    { value: "az", label: "Name (A-Z)" },
                  ].map((opt) => (
                    <li
                      key={opt.value}
                      onClick={() => {
                        setSortOption(opt.value);
                        updateSearchParams(selectedCategory, opt.value);
                        setOpenDropdown(null);
                      }}
                      className={`px-3 py-2 cursor-pointer transition-all ${
                        sortOption === opt.value ? "bg-yellow-400 text-black font-bold" : "hover:bg-white/20"
                      }`}
                    >
                      {opt.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>

            <div ref={sortRef} className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "sort" ? null : "sort")}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white 
                         px-3 py-1 rounded-md flex items-center gap-2
                         focus:outline-none focus:ring-2 focus:ring-yellow-400/30 transition"
              >
                <span className="text-[13px] md:text-[13px]">
                  {sortOption === "none"
                    ? "Sort by"
                    : sortOption === "price-low-high"
                    ? "Price: Low to High"
                    : sortOption === "price-high-low"
                    ? "Price: High to Low"
                    : sortOption === "rating"
                    ? "Top Rated"
                    : "Name (A-Z)"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === "sort" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "sort" && (
                <ul className="absolute right-0 top-full mt-1 w-48 bg-[#1f2d1c]/95 backdrop-blur-md border border-white/20 rounded-md shadow-lg z-50 overflow-y-auto max-h-60 text-[13px] md:text-[13px]">
                  {[
                    { value: "none", label: "Sort by" },
                    { value: "price-low-high", label: "Price: Low to High" },
                    { value: "price-high-low", label: "Price: High to Low" },
                    { value: "rating", label: "Top Rated" },
                    { value: "az", label: "Name (A-Z)" },
                  ].map((opt) => (
                    <li
                      key={opt.value}
                      onClick={() => {
                        setSortOption(opt.value);
                        updateSearchParams(selectedCategory, opt.value);
                        setOpenDropdown(null);
                      }}
                      className={`px-3 py-2 cursor-pointer transition-all ${
                        sortOption === opt.value ? "bg-yellow-400 text-black font-bold" : "hover:bg-white/20"
                      }`}
                    >
                      {opt.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-200 gap-y-1 ${
              openDropdown ? "blur-sm" : ""
            }`}
          >
            {sortedProducts.map((p) => (
              <div key={p.id} className={openDropdown ? "pointer-events-none" : ""}>
                <All_Product_Card products={p} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default All_ProductList;
