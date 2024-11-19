import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";  // Custom CSS file
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const cartHandle = (id) => {
        navigate(`/product/${id}`);
    }

    useEffect(() => {
        let isMounted = true;

        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) throw new Error("Failed to fetch products");
                const products = await response.json();

                if (isMounted) {
                    setData(products);
                    setFilter(products);
                }
            } catch (error) {
                if (isMounted) setError(error.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        getProducts();

        return () => {
            isMounted = false;
        };
    }, []);

    const Loading = () => (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    const filterProduct = (cat) => {
        const updateData = data.filter((x) => x.category === cat);
        setFilter(updateData);
    };

    const ShowProducts = () => (
        <div className="container">
            <div className="btn-group mb-4 text-center" role="group">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelry</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>

            <div className="row">
                {filter.map((pro, id) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={pro.id}>
                        <div className="card h-100" style={{ padding: '21px',cursor:'pointer' }} onClick={() => cartHandle(id)}>
                            <img
                                src={pro.image}
                                className="card-img-top product-img"
                                alt={`${pro.title} image`}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{pro.title.substring(0, 12)}...</h5>
                                <p className="card-text">${pro.price}</p>
                            </div>
                            <div className="d-flex justify-content-center ">
                                <Link to={`/products/${pro.id}`} className="btn btn-outline-primary">Buy Now</Link>
                                {/* <button className="btn btn-outline-primary custom-cart-btn">Add to Cart</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-3">
                    <h1 className="display-6 fw-bold text-center" style={{ color: '#6B6B6B' }}>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {error ? <p className="text-danger text-center">Error: {error}</p> : loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    );
};

export default Products;
