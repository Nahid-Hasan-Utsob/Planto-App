// src/Pages/Cart/Cart.tsx
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import { MdDelete } from "react-icons/md";
import type { Product } from "../../hooks/types";

interface CartItem extends Product {
  quantity: number;
}

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.items);

  // ✅ Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ Increase quantity
  const increaseQty = (item: CartItem) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  // ✅ Decrease quantity (১ এর নিচে নামবে না)
  const decreaseQty = (item: CartItem) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
    // ❌ else removeFromCart বাদ দেওয়া হলো, quantity 1 থাকলে আর কমবে না
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-white py-16 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-32 h-32 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="18"
        >
          <path
            d="M160 400a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm224 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32ZM64 64h48l48 256h256l32-160H128"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2 className="text-white text-lg md:text-xl font-semibold mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-white text-sm md:text-base mb-4">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <button
          onClick={() => (window.location.href = "/shops")}
          className="primary-bg-color bg-green-600 text-white px-5 py-2 rounded-md text-sm md:text-base transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto lg:mt-10 lg:p-4">
      <h2 className="lg:text-2xl text-[16px] md:text-[17px] font-semibold lg:mb-4 mb-2 text-white">
        Your Cart
      </h2>

      <div className="rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="md:p-3 p-4 text-[10px] lg:text-[18px] text-white ">Product</th>
              <th className="md:p-3 text-[10px] lg:text-[18px] text-center text-white">
                Price
              </th>
              <th className="md:p-3 text-[10px] lg:text-[18px] text-center text-white">
                Quantity
              </th>
              <th className="md:p-3 text-[10px] lg:text-[18px] text-center text-white">
                Total
              </th>
              <th className="md:p-3 text-[10px] lg:text-[18px] text-center text-white">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item: CartItem) => (
              <tr
                key={item.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl"
              >
                <td className="lg:p-3 flex items-center lg:gap-3 gap-1 text-white">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-10 md:w-14 md:h-14 h-10 object-contain rounded"
                  />
                  <span className="md:text-xs text-[10px] lg:text-base w-[40px]">
                    {item.title}
                  </span>
                </td>
                <td className="lg:p-3 text-center text-white text-[10px] lg:text-base">
                  ${item.price}
                </td>
                <td className="lg:p-3 text-center text-white text-xs lg:text-base">
                  <div className="flex items-center justify-center lg:gap-2 gap-1">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="md:px-2 px-1.5 py- md:py-1 lg:px-3 bg-red-500 rounded text-white lg:text-lg text-[15px] cursor-pointer"
                      disabled={item.quantity <= 1} // ✅ button disable if 1
                    >
                      -
                    </button>
                    <span className="border px-1 py-0.5 rounded-xs md:m-1 md:w-6 w-4 text-[10px] lg:w-8">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQty(item)}
                      className="md:px-2 px-1.5 py- md:py-1 lg:px-3 bg-green-600 rounded text-white lg:text-lg text-[15px] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="lg:p-3 text-center text-white text-[10px] md:text-[12px] lg:text-base">
                  <span className="primary-text-color">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </td>
                <td className="lg:p-3 text-center text-white text-[12px] lg:text-base">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 cursor-pointer"
                  >
                    <MdDelete className="md:text-[24px] text-xl lg:text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Total Price */}
      <div className="flex justify-end mt-6">
        <div className="text-right menu-text-color">
          <p className="lg:text-lg text-[15px] font-semibold text-white">
            Total:{" "}
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </p>
          <button className="primary-bg-color bg-red-500 text-white lg:px-5 px-3 lg:py-2 py-1 my-3 text-[13px] rounded mt-3">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
