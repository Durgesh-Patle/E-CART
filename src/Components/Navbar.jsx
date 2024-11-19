import { Link } from "react-router-dom";
// import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-sm" style={{ background: '#FFFFFF', color: '#6B6B6B' }}>
            <div className="container justify-content-between ">
                <Link  to="/" className="navbar-brand fw-bold fs-8" to="/" style={{ color: '#6B6B6B' }} >
                    E-CART
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 f    ">
                        <li className="nav-item">
                            <Link exact className="nav-link" to="/" style={{ color: '#6B6B6B' }}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" style={{ color: '#6B6B6B' }}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{ color: '#6B6B6B' }}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" style={{ color: '#6B6B6B' }}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="buttons">
                        <Link to="/login" className="btn btn-outline-success">
                            <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login
                        </Link>
                        <Link to="/register" className="btn btn-outline-primary ms-2">
                            <i className="fa fa-user-plus me-1" aria-hidden="true"></i> Register
                        </Link>
                        <Link to="/cart" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> Cart(0)
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
