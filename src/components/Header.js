import { Link } from "react-router-dom";

const Header = () => (
  <div className="bg-green-100 flex justify-between items-center p-5 shadow-lg">
    <div className="flex items-center">
      <img
        className="w-16 p-2"
        src="https://w1.pngwing.com/pngs/188/805/png-transparent-food-icon-tea-cooking-drink-kitchen-fast-food-logo-restaurant.png"
      ></img>
      <h1 className="font-bold text-2xl items-center">Foodiyoo!!!</h1>
    </div>
    <div className="flex gap-8">
      <Link className="text-2xl font-bold" to="/">
        Home
      </Link>
      <Link className="text-2xl font-bold" to="/about">
        About Us
      </Link>
      <Link className="text-2xl font-bold" to="/contact">
        Contact Us
      </Link>
      <Link className="text-2xl font-bold" to="/grocery">
        Grocery
      </Link>
      <Link className="text-2xl font-bold" to="/cart">
        Cart
      </Link>
    </div>
  </div>
);

export default Header;
