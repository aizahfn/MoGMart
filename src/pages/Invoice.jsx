import React from "react";
import { useSelector } from "react-redux";

const Invoice = () => {
  const productData = useSelector((state) => state.mogmart.productData);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h1 className="text-3xl font-extrabold mb-4 text-center">Invoice</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <td className="border px-4 py-2">
                ${product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-xl font-bold">
          Total Amount: ${calculateTotal(productData)}
        </p>
      </div>
    </div>
  );
};

const calculateTotal = (productData) => {
  let total = 0;
  productData.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};

export default Invoice;
