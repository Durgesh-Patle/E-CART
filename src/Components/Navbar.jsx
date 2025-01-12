import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-700 no-underline"
        >
          E-CART
        </Link>

        {/* Toggle Button (for mobile view) */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                exact
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition"
          >
            <i className="fa fa-sign-in mr-1"></i> Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
          >
            <i className="fa fa-user-plus mr-1"></i> Register
          </Link>
          <Link
            to="/cart"
            className="px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-700 hover:text-white transition"
          >
            <i className="fa fa-shopping-cart mr-1"></i> Cart(0)
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
