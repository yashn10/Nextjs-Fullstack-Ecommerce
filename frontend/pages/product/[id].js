import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {

    const router = useRouter();
    const { id, image } = router.query;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getproduct = async () => {
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
            getproduct();
        }
    }, [id]);


    const deleteproduct = async () => {
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
        return <h1 style={{ "padding": "20% 20%" }}>Loading....</h1>;
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
                            <a className="btn-floating halfway-fab waves-effect waves-light red">
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
                                // value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <label htmlFor="quantity">Quantity</label>
                        </div>
                        <div className="row">
                            <button className="btn waves-effect waves-light blue" type="submit">
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                            <button
                                className="btn waves-effect waves-light red"
                                style={{ marginLeft: '10px' }}
                                onClick={deleteproduct}
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
