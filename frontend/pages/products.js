"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from 'pexels';

const products = () => {

    const [data, setData] = useState([]);
    const [images, setImages] = useState({});
    const [query, setquery] = useState('');
    const [products, setproducts] = useState([]);

    const client = createClient('JepWJqaBJwRFZQ6EZJnBadthVBCAW2NZzwUUjUn2RsqYfD6EVwFGJ8cF');


    const fetchPhotos = async (query) => {
        try {
            const response = await client.photos.search({ query, per_page: 1 });
            return response.photos.length > 0 ? response.photos[0].src.medium : 'https://via.placeholder.com/400x300';
        } catch (error) {
            console.error('Error fetching photos:', error);
            return 'https://via.placeholder.com/400x300';
        }
    };


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await response.json();
            setData(jsonData);

            const imagesMap = {};
            for (const product of jsonData) {
                const image = await fetchPhotos(product.image);
                imagesMap[product._id] = image;
            }
            setImages(imagesMap);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    useEffect(() => {
        const filteredproducts = query ?
            data.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())) : data;

        setproducts(filteredproducts);
    }, [query, data]);


    return (

        <div className="row py-12 px-4 md:px-8">

            {/* Updated Search Bar */}
            <div className="input-field" style={{ position: 'relative', width: '25%' }}>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for a product..."
                    className="black-text"
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                    style={{
                        paddingLeft: '2.5rem', // Adjust padding for the icon
                        backgroundColor: 'white', // White background
                        borderRadius: '25px', // Rounded edges
                        color: 'black',
                    }}
                />
                {/* Search Icon */}
                <i
                    className="material-icons prefix grey-text text-darken-1"
                    style={{
                        position: 'absolute',
                        left: '0.5rem',
                        top: '0.9rem',
                    }}
                >
                    search
                </i>
            </div>


            <div className="flex flex-wrap">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2" key={product._id}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <div className="relative">
                                    <img
                                        src={images[product._id]}
                                        alt={product.name}
                                        className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                        <span className="text-white text-lg font-semibold">{product.name}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-700 mb-3">{product.desc}</p>
                                </div>
                                <div className="p-4 border-t border-gray-200">
                                    <Link
                                        href={`/product/${product._id}?image=${encodeURIComponent(images[product._id])}`}
                                        className="text-red-500 inline-flex items-center transition-colors duration-300 hover:text-red-700"
                                    >
                                        View details
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className="w-full text-center" style={{ fontSize: "30px", height: "100vh", alignContent: "center" }}>No products available !!</h1>
                )}
            </div>

        </div>

    )

}

export default products