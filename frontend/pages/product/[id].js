import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const { id, image } = router.query;
    const modalRef = useRef(null);

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
                throw new Error("Failed to delete product");
            }

            const res = await response.json();
            console.log("Product deleted successfully", res);

        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };



    useEffect(() => {
        M.Modal.init(modalRef.current);
    }, []);


    const openModal = () => {
        const modalInstance = M.Modal.getInstance(modalRef.current);
        if (modalInstance) {
            modalInstance.open();
        } else {
            console.error('Modal instance is undefined.');
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

        <div className="container" style={{ width: "35%" }}>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src={decodeURIComponent(image)} alt="Product" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <span className="card-title">{product.name}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons">add</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <input type='number' min="1" placeholder="select quantity for order" />
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <button className="btn waves-effect waves-light #f44336 red" style={{ float: "right" }} onClick={openModal}>Delete</button>
                    </div>
                    <div className="card-content" style={{ height: "120px" }}>
                        <p>{product.desc}.</p>
                    </div>
                    <div className="modal" style={{ width: "20%" }} ref={modalRef}>
                        <div className="modal-content">
                            <h4>Modal Header</h4>
                            <p>Are you sure ?</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn waves-effect waves-light #4caf50 green" style={{ float: "left" }}>No</button>
                            <button className="btn waves-effect waves-light #1e88e5 blue darken-1" style={{ float: "right" }} onClick={deleteproduct}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;
