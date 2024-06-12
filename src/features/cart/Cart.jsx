import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItems, getCart, getUsername } from "./cartSlice";
import { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";

function Cart() {
  // const [isClearing, setIsClearing] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const user = useSelector(getUsername);
  function handleClearCart() {
    dispatch(clearItems());
    // navigate("/menu");
  }
  if(!cart.length) return <EmptyCart/>
  return (
    <div className="px-4 py-1">
      <LinkButton link={"/menu"}>Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {user}</h2>
      <ul className="divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-10 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={handleClearCart} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
