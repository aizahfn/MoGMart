import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import axios from "axios";

const PageShop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://652628ba67cfb1e59ce7f1b6.mockapi.io/api/v1/product"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const isCategoryMatch =
        categoryFilter === "" || product.category === categoryFilter;
      const isSearchMatch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase());

      return isCategoryMatch && isSearchMatch;
    });

    setFilteredProducts(filtered);
  }, [categoryFilter, searchQuery, products]);

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-5 bg-gray-100">
      <h1 className="text-4xl text-black font-extrabold mb-4 text-center font-titleFont">
        MoG MART PRODUCT
      </h1>
      <div className="flex justify-between items-center mb-4">
        <div className="mb-4">
          <label
            htmlFor="categoryFilter"
            className="block text-l text-gray-600"
          >
            Category Product :
          </label>
          <select
            id="categoryFilter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-gray-900 text-gray-600"
          >
            <option value="">All</option>
            <option value="Gadget">Gadget</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="search"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-gray-900 text-gray-600"
          >
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Product Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-gray-900"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-6">
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PageShop;
