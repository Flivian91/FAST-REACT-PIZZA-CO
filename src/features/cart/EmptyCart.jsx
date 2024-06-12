import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-5 px-4">
      <LinkButton link={"/menu"}>Back to menu</LinkButton>

      <p className="font-semibold mt-10">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
