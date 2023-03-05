import React from "react";
import "./Cart.css";

function Cart(cartItems) {
  console.log(cartItems);
  const carts = cartItems.cartItems;

  const totalPrice = carts.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      <div className="flex flex-wrap max-sm:flex-col space-x-3 space-y-3 p-4 row-span-6 lg:ml-36">
        {carts.map((items) => (
          <div
            className="card w-full sm:w-1/2 md:w-1/5 p-10 m-3 justify-center items-center"
            key={items.id}
          >
            <div className="h-full p-10 max-sm:pb-4">
              <img src={items.image} alt="pics" />
            </div>
            <div>
              <h1 className=" font-mono font-semibold text-indigo-900 mb-2">
                {items.name}
              </h1>
              <h2 className=" font-extrabold font-sans text-red-700 mb-2">
                $ {items.price * items.quantity}
              </h2>
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-pink-400 text-white font-bold mt-2 ml-0 w-[140px] py-2 px-4 rounded-md sm:rounded-lg"
                onClick={() => cartItems.handleDelete(items)}
              >
                Delete cart
              </button>
            </div>
            <div className="flex justify-center items-center pt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => cartItems.handleSubmit(items)}
              >
                +
              </button>
              <button
                className="text-slate-800 font-bold py-2 rounded"
                
              >
                {items.quantity}
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => cartItems.handleRemove(items)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <h1 className=" bg-indigo-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          $ {totalPrice}
          
        </h1>
      </div>
      {cartItems.cartItems.length > 0 &&<div className="flex justify-center items-center pt-3" onClick={cartItems.handleClear}>
      <h1 className=" bg-red-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
        Clear Cart
      </h1>
      </div>
        }
    </>
  );
}

export default Cart;
