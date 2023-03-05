import axios from "axios";
import React, { useEffect } from "react";
import "./Products.css";
function Products({ products, handleSubmit, cartItems, searchProduct }) {
    console.log(cartItems)

    const filteredProducts = products.filter((item)=>item.name.toLowerCase().includes(searchProduct.toLowerCase()))
    console.log(filteredProducts)

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.dir(err));
    }, []);
  return (
    <div className="flex flex-wrap max-sm:flex-col space-x-3 space-y-3 p-4 row-span-6 lg:ml-36">
    {filteredProducts ? filteredProducts.map((items) => (
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
              $ {items.price}
            </h2>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-green-500 text-white font-bold mt-2 ml-0 w-[140px] py-2 px-4 rounded-md sm:rounded-lg"
            onClick={()=>handleSubmit(items)}>
              Add to cart
            </button>
          </div>
        </div>
      )):
     ""
    }
      {!filteredProducts && products && products.map((items) => (
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
              $ {items.price}
            </h2>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-green-500 text-white font-bold mt-2 ml-0 w-[140px] py-2 px-4 rounded-md sm:rounded-lg"
            onClick={()=>handleSubmit(items)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
