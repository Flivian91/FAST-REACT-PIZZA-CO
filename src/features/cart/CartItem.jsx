import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItems from "./DeleteItems";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-3 md:flex md:items-center md:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between md:gap-5">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItems id={pizzaId}>delete</DeleteItems>
      </div>
    </li>
  );
}

export default CartItem;
