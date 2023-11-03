import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../login/AuthProvider";

const Cart = () => {
  const productData = useSelector((state) => state.mogmart.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckout = () => {
    if (user) {
      navigate("/invoice");
    } else {
      toast.error("Silakan login terlebih dahulu untuk melanjutkan checkout.");
      navigate("/login");
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-hover"
        src="https://png.pngtree.com/png-clipart/20221025/original/pngtree-sale-run-concept-with-happy-people-with-shopping-carts-rush-to-png-image_8721832.png"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#efeded] py-6 px-4">
          <div className="w-1/3 bg-[#efeded] py-6 px-4">
            <h2 className="text-2xl font-bold ">Cart Total</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                ${totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping <span>From Indonesia</span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>

          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      {/* <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </div>
  );
};

export default Cart;
