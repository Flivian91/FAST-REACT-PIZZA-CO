import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { getUsername } from "../features/cart/cartSlice";

function Home() {
  const user = useSelector(getUsername);

  return (
    <div className="my-10 text-center ">
      <h1 className="text-xl mb-10 font-semibold text-center text-stone-800 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500 ">
          {" "}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue Ordering, {user}
        </Button>
      )}
    </div>
  );
}

export default Home;
