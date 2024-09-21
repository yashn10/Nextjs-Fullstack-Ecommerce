import React from 'react'
import Link from 'next/link'

const seller = () => {

    return (

        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Sell Your Products With Us
                    </h1>
                    <p className="text-lg text-gray-600 mx-auto max-w-2xl">
                        Join us as a seller, register your products, and let users start placing orders for them. Follow these steps to start your journey as a successful seller.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Register as a Seller
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Sign up as a seller and log in with your account to access the seller dashboard.
                        </p>
                        <Link href={"/registerseller"} className="text-red-500 font-semibold inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Login as a Seller
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Once registered, log in to manage your products and profile.
                        </p>
                        <Link href={"/sellerlogin"} className="text-red-500 font-semibold inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Add Your Products
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Upload your products with all necessary details and start selling.
                        </p>
                        <Link href={"/sellerlogin"} className="text-red-500 font-semibold inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Sell Your Products
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Once products are listed, buyers can start placing orders instantly.
                        </p>
                        <Link href={"/sellerlogin"} className="text-red-500 font-semibold inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link href={"/registerseller"}>
                        <button className="bg-red-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    )

}

export default seller