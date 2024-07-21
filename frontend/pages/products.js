"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from 'pexels';

const products = () => {

    const [data, setData] = useState([]);
    const [images, setImages] = useState({});

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
            const response = await fetch('https://nextjs-fullstack-ecommerce.onrender.com/products', {
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


    return (

        <div className="row" style={{ padding: "5% 5%" }}>

            {data.map((data => (
                <div className="col s12 m3" key={data._id}>
                    <div className="card">
                        <div className="card-image">
                            <img src={images[data._id]} alt={data.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <span className="card-title">{data.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{data.desc}.</p>
                        </div>
                        <div className="card-action">
                            <Link href={`/product/${data._id}?image=${encodeURIComponent(images[data._id])}`}>View details</Link>
                        </div>
                    </div>
                </div>
            )))}

        </div>

    )

}

export default products