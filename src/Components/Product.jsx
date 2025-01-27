import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Product = () => {
    let { id } = useParams(); 

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    let navigate=useNavigate();

    // Route Go To cart.
    function goToCart(){
        navigate(`/cart/${id}`);
    }
    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            let data = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await data.json());
            setLoading(false)
        }
        getProduct();
    }, [])

    const Loading=()=>{
        return(
            <div >
                Loading.........
            </div>
        )
    }

    const ShowProduct=()=>{
        return(
            <div>
                <div className="col-md-6">
                    <img src={product.image}  height='400px' width='400px'/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='lead'>
                        {product.description}
                    </p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={addTocart(product.id)}>Add to Cart</button>

                    <Link className='btn btn-dark ms-2 px-3 py-2' to="/cart" onClick={goToCart}>Go to Cart</Link>
                </div>

            </div>
        )
    }
    return (
        <div>
            <div className="container py-5 ">
                <div className="row py-4">
                    {loading?<Loading/>:<ShowProduct/>}
                </div>
            </div>
        </div>
    )
}

export default Product
