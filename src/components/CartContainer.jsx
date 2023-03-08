import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearAll } from "../feature/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <div className="mt-5">
        <h2>The Cart list</h2>
        <h3>is empty</h3>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <header>
        <h2>The Cart List</h2>
      </header>
      <div className="mt-4">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr className=" mx-auto my-4 w-75" />
        <h4 className="d-flex justify-content-around">
          The Total: <span>{total.toFixed(2)}</span>
        </h4>
        <button
          className="btn btn-danger p-2 my-5 w-50"
          onClick={() => dispatch(clearAll())}
        >
          Clear the list
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;
