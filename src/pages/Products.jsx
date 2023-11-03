import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://652628ba67cfb1e59ce7f1b6.mockapi.io/api/v1/product"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Mobile Gadget Mart
        </h1>
        <p className="max-w-[700px] text-gray-600 text-center">
          Welcome to our online store, the place where technology meets quality.
          Find sophisticated cellphones, powerful laptops, and stylish
          accessories to meet all your needs.
        </p>
        <h1 className="text-gray-900 font-bold text-xl">
          OUR BEST SELLING ITEMS
        </h1>
        <span className="w-20 h-[3px] bg-gray-700"></span>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 px-5">
        {products.slice(0, 8).map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link to="/shop">
          <button className="mt-8 ml-7 flex items-center justify-center gap-1 text-gray-600 hover:text-black duration-300">
            <span>
              <HiOutlineArrowRight />
            </span>
            More Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
