"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Home = () => {

    return (

        <>

            <div className="row">
                <div className="relative w-full">
                    <Image
                        src='/slider_1.jpg'
                        alt='Slider Image'
                        width={500}
                        height={300}
                        layout='responsive'
                        className="transition-transform duration-700 ease-in-out transform hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
                    </div>
                </div>
            </div>

            <div className="row mt-12">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className="p-4 lg:w-1/3 transition-transform duration-500 hover:scale-105">
                                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg hover:shadow-xl transform transition-shadow duration-300">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Product Title {index + 1}</h1>
                                        <p className="leading-relaxed mb-3">Description of the product goes here. Highlight features that stand out.</p>
                                        <Link href="/products" passHref>
                                            <div className="text-red-500 inline-flex items-center cursor-pointer transition-colors duration-300 hover:text-red-700">
                                                <span>Learn More</span>
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </Link>
                                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

        </>

    )

}


export default Home
