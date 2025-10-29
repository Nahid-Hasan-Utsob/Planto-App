// src/Pages/Cart/CartPage.tsx
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { removeFromCart, clearCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl">Your cart is empty</p>
        <Link to="/" className="btn btn-primary mt-4">Continue Shopping</Link>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          </div>
          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="btn btn-sm btn-error ml-4"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <button className="btn btn-success mt-4">Checkout</button>
        <button
          onClick={() => dispatch(clearCart())}
          className="btn btn-outline btn-sm ml-2"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}