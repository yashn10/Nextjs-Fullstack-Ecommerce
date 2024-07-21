import React, { useState } from 'react'
import { useRouter } from "next/router";

const addproduct = () => {

    const router = useRouter();

    const [data, setdata] = useState({
        name: '', price: '', image: '', catagory: '', desc: ''
    })


    const handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setdata({ ...data, [name]: value });
    }


    const submit = async (e) => {
        e.preventDefault();

        const { name, price, image, catagory, desc } = data; // Destructure formData
        const body = JSON.stringify({ name, price, image, catagory, desc }); // Serialize only necessary properties

        try {
            const response = await fetch('http://localhost:8000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            })

            const res = await response.json();

            if (res.success) {
                router.push('/products');
                console.log('Product added successfully');
                window.alert('Product registered successfull');
                // localStorage.setItem("authToken", res.token);
                // console.log("Token:", localStorage.getItem("authToken"));
            } else {
                console.log('Invalid credentials');
                window.alert('Invalid credentials');
            }

        } catch (error) {
            console.error('Error:', error);
            window.alert('An error occurred');
        }

    }


    return (

        <section className="text-gray-600 body-font relative">
            <form className="container px-5 py-24 mx-auto" onSubmit={submit}>
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Your Product</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm text-gray-600">Product Name</label>
                                <input type="text" id="name" name="name" value={data.name} onChange={handleinput} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="price" className="leading-7 text-sm text-gray-600">Product Price</label>
                                <input type="number" id="price" name="price" value={data.price} onChange={handleinput} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="image" className="leading-7 text-sm text-gray-600">Product Image</label>
                                <input type="text" id="image" name="image" value={data.image} onChange={handleinput} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="category" className="leading-7 text-sm text-gray-600">Product Category</label>
                                <input type="text" id="category" name="catagory" value={data.catagory} onChange={handleinput} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="description" className="leading-7 text-sm text-gray-600">Product Description</label>
                                <textarea id="description" name="desc" value={data.desc} onChange={handleinput} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Add</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a className="text-red-500">example@email.com</a>
                            <p className="leading-normal my-5">49 Smith St.
                                <br />Saint Cloud, MN 56301
                            </p>
                            <span className="inline-flex">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </section>

    )

}


export default addproduct