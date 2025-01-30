import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import CartIcon from "../assets/images/cart.svg";

export const Header = () => {
  const activeClass = "text-xl md:mr-12 bg-slate-100 p-2 rounded";
  const inActiveClass = "text-xl md:mr-12 p-2";

  return (
    <header className="bg-slate-300 flex items-center justify-between p-4">
      <Link to="/" className="logo text-xl flex">
        <img src={Logo} className="mr-2 h-8 sm:h-9" alt="Movies-R-Us Logo" />
        <span className="p-1">ShopTemp</span>
      </Link>
      <nav className="flex">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="hidden md:flex">
        <img src={CartIcon} className="mr-2 h-8 sm:h-9" alt="Cart Icon" />
        <span className="py-2">Cart: 2</span>
      </Link>
    </header>
  );
};
