import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {

    const router = useRouter();
    // Check if running in the browser environment
    const isBrowser = typeof window !== 'undefined';
    // Initialize login status
    const login = isBrowser ? localStorage.getItem('authToken') : null;


    const logout = () => {
        localStorage.removeItem('authToken')
        router.push('/login');
        window.alert("User logout successfully");
        console.log("User logout successfully");
    }


    const Footer = () => {
        return (
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-4 md:mb-0">
                            <h5 className="text-lg font-bold">Footer Content</h5>
                            <p className="text-gray-400">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div>
                            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                                {login ? (
                                    <>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/products'}>Products</Link>
                                        </li>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/seller'}>Seller</Link>
                                        </li>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/contact'}>Contact</Link>
                                        </li>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/'} onClick={logout}>Logout</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/login'}>Login</Link>
                                        </li>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/signup'}>Signup</Link>
                                        </li>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/products'}>Products</Link>
                                        </li>
                                        <li>
                                            <Link className="text-gray-400 hover:text-red-500" href={'/contact'}>Contact</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 text-gray-400 py-3">
                    <div className="container mx-auto text-center">
                        © 2014 Copyright Text
                        <a className="ml-4 hover:text-red-500" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    };


    return (

        <Footer />

    )

}

export default Footer
