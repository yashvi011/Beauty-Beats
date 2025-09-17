import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../requestMethods";
import { removeProduct, clearCart } from "../redux/cartRedux.js"; // import the new actions

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = async () => {
    try {
      const res = await userRequest.post("/stripe/create-checkout-session", {
        cart,
        userId: user.currentUser._id,
        email: user.currentUser.email,
        name :user.currentUser.name,
      
      });
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen  p-8">
      <h3 className="text-[18px] font-bold mb-6">Shopping Cart</h3>
      <div className="flex gap-8">
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          <div className="flex flex-col space-y-4">
            {cart.products.map((product, index) => (
              <div
                className="flex items-center justify-between border-b border-gray-200 pb-4"
                key={index}
              >
                <img
                  src={product.img}
                  alt="Product"
                  className="w-32 h-32 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {product.desc.slice(0, 100)}...
                  </p>
                  <div className="flex items-center">
                    <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full text-3xl" />
                    <span className="text-lg font-semibold mx-4">
                      {product.quantity}
                    </span>
                    <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full text-3xl" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">
                    ${product.price * product.quantity}
                  </p>
                  <FaTrashAlt
                    className="text-red-600 cursor-pointer"
                    onClick={() => handleRemoveProduct(product)}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-lg font-semibold"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="w-80 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium">Subtotal:</span>
              <span className="text-lg font-semibold">${cart.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Shipping:</span>
              <span className="text-lg font-semibold">$10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-lg font-bold">${cart.total + 10}</span>
            </div>
            <button
              className="bg-[#ef93db] text-white p-3 w-full rounded-lg font-semibold"
              onClick={() => handleCheckout()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;