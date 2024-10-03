import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './store/cartSlice';

const cart = () => {

    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };


    return (

        <div className="container-fluid h-full bg-gray-800 py-10 text-white" style={{ height: "100vh" }}>
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-gray-300">Your cart is empty.</p>
                ) : (
                    <table className="table-auto w-full text-center bg-gray-700 rounded-md overflow-hidden shadow-lg mt-5">
                        <thead className="bg-gray-900 text-gray-300">
                            <tr>
                                <th className="py-3">Image</th>
                                <th className="py-3">Item Name</th>
                                <th className="py-3">Item Price</th>
                                <th className="py-3">Quantity</th>
                                <th className="py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-600 transition duration-300 ease-in-out">
                                    <td className="py-4">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover mx-auto" />
                                    </td>
                                    <td className="py-4 text-gray-300">{item.name}</td>
                                    <td className="py-4 text-gray-300">${item.price.toFixed(2)}</td>
                                    <td className="py-4 text-gray-300">{item.quantity}</td>
                                    <td className="py-4">
                                        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition-all ease-in-out" onClick={() => handleRemoveFromCart(item.id)}>
                                            <i className="material-icons left">delete</i>Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="text-right mt-6">
                    <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded transition duration-300" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>

    );
};


export default cart;
