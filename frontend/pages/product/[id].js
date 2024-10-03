import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetail = () => {

    const router = useRouter();
    const { id, image } = router.query;
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1); // Initialize quantity


    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        if (id) {
            getProduct();
        }
    }, [id]);


    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ id: product.id, name: product.name, image, price: product.price, quantity: parseInt(quantity) }));
            alert("Product added to cart!");
        }
    };


    const deleteProduct = async () => {
        try {
            const response = await fetch(`http://localhost:8000/product/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                alert("Failed to delete product");
                throw new Error("Failed to delete product");
            }

            const res = await response.json();
            alert("Product deleted successfully");
            console.log("Product deleted successfully", res);

        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    if (loading) {
        return <h1 style={{ padding: "20% 20%" }}>Loading....</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    if (!product) {
        return <h1>No product found</h1>;
    }


    return (

        <div className="container">
            <div className="row" style={{ paddingTop: '5%' }}>
                {/* Left side (Image) */}
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-image">
                            <img
                                src={decodeURIComponent(image)}
                                alt="Product"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                            <span className="card-title">{product.name}</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={handleAddToCart}>
                                <i className="material-icons">add</i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side (Product Details) */}
                <div className="col s12 m6 l6">
                    <div className="card-content">
                        <p>{product.desc}</p>
                    </div>
                    <div className="card-content">
                        <div className="input-field">
                            <input
                                type="number"
                                min="1"
                                placeholder="Select quantity"
                                value={quantity} // Set value to state
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <label htmlFor="quantity">Quantity</label>
                        </div>
                        <div className="row">
                            <button className="btn waves-effect waves-light blue" type="submit" onClick={handleAddToCart}>
                                Add to Cart
                                <i className="material-icons right">shopping_cart</i>
                            </button>
                            <button
                                className="btn waves-effect waves-light red"
                                style={{ marginLeft: '10px' }}
                                onClick={deleteProduct}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};


export default ProductDetail;
