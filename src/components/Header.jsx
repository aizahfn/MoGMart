import React from "react";
import { cartImg } from "../assets/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { database, auth } from "../login/firebase";
import { useAuth } from "../login/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.mogmart.productData);
  const history = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      history("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-20 bg-gray-200 border-black border-b-2 font-bold text-2xl sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-5">
        <Link to="/">
          <div>
            <h1 className="text-black">MoG MART</h1>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-gray-500 hover:underline cursor-pointer duration-300">
                HOME
              </li>
            </Link>
            <Link to="/shop">
              <li className="text-base text-black font-bold hover:text-gray-500 hover:underline cursor-pointer duration-300">
                PAGE SHOP
              </li>
            </Link>
            <Link to="/aboutus">
              <li className="text-base text-black font-bold hover:text-gray-500 hover:underline cursor-pointer duration-300">
                ASK US
              </li>
            </Link>
            {user ? (
              <button onClick={handleLogout}>
                <li className="text-base text-black font-bold hover:text-gray-500 hover:underline cursor-pointer duration-300">
                  LOGOUT
                </li>
              </button>
            ) : (
              <Link to="/login">
                <li className="text-base text-black font-bold hover:text-gray-500 hover:underline cursor-pointer duration-300">
                  Login
                </li>
              </Link>
            )}
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-8" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold rounded-full">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src="https://w7.pngwing.com/pngs/713/762/png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome.png"
              alt="userLogo"
            />
          </Link>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Header;
