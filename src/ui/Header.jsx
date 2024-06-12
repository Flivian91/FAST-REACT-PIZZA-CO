import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3 border-b border-stone-500 flex justify-between items-center">
      <Link to="/" className="tracking-widest uppercase font-pizza">Fast React Pizza Co.</Link>
      <SearchOrder/>
      <Username/>
    </header>
  );
}

export default Header;
