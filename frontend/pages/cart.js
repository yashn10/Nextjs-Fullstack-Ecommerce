import React from 'react'

const cart = () => {

    return (

        <div className="container-fluid h-full bg-gray-800 py-10 text-white">
            {/* Table Section */}
            <div className="container mx-auto">
                <table className="table-auto w-full text-center bg-gray-700 rounded-md overflow-hidden shadow-lg">
                    <thead className="bg-gray-900 text-gray-300">
                        <tr>
                            <th className="py-3">Image</th>
                            <th className="py-3">Item Name</th>
                            <th className="py-3">Item Price</th>
                            <th className="py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-600 transition duration-300 ease-in-out">
                            <td className="py-4">
                                <img
                                    src="/path-to-image.jpg"
                                    alt="Product Image"
                                    className="w-12 h-12 rounded-md object-cover mx-auto"
                                />
                            </td>
                            <td className="py-4 text-gray-300">Eclair</td>
                            <td className="py-4 text-gray-300">$0.87</td>
                            <td className="py-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2 rounded transition-all ease-in-out">
                                    <i className="material-icons left">edit</i>Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mx-2 rounded transition-all ease-in-out">
                                    <i className="material-icons left">delete</i>Delete
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-600 transition duration-300 ease-in-out">
                            <td className="py-4">
                                <img
                                    src="/path-to-image.jpg"
                                    alt="Product Image"
                                    className="w-12 h-12 rounded-md object-cover mx-auto"
                                />
                            </td>
                            <td className="py-4 text-gray-300">Donut</td>
                            <td className="py-4 text-gray-300">$1.99</td>
                            <td className="py-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2 rounded transition-all ease-in-out">
                                    <i className="material-icons left">edit</i>Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mx-2 rounded transition-all ease-in-out">
                                    <i className="material-icons left">delete</i>Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Cart Total Section */}
                <div className="cart-total text-right mt-6">
                    <h5 className="text-lg font-semibold text-gray-300 mb-4">Total: $2.86</h5>
                    <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded transition duration-300">
                        <i className="material-icons left">shopping_cart</i>Proceed to Checkout
                    </button>
                </div>
            </div>
            
        </div>

    )

}

export default cart