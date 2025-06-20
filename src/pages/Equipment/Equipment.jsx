import { useState } from "react";
import productsData from "../../data/Products.json";
import "./Equipment.scss";

const categories = ["All", "Gloves", "Wraps", "Pads", "Protection"];

const Equipment = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-container">
      <h1 className="page-title">Shop <span>Equipment</span></h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === category
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col product-card"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg object-cover h-48 w-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className=" mb-2">{product.description}</p>
              <span className="font-bold text-lg mb-4">{product.price}</span>
              <a className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-900 transition" href={product.url} target="_blank">
                Add to Cart
              </a>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Equipment;
