import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'


const Navbar = () => {

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


    const NavBar = () => {
        return (
            <nav className="bg-gray-900 text-white">
                <div className="container mx-auto px-28 flex justify-between items-center">
                    <Link href={'/'} className="text-2xl font-bold">
                        Logo
                    </Link>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href={'/'} className="hover:text-red-500">Home</Link>
                        </li>
                        <li>
                            <Link href={'/products'} className="hover:text-red-500">Products</Link>
                        </li>
                        {login ? (
                            <>
                                <li>
                                    <Link href={'/cart'} className="hover:text-red-500">Cart</Link>
                                </li>
                                <li>
                                    <Link href={'/seller'} className="hover:text-red-500">Become Seller</Link>
                                </li>
                                <li>
                                    <Link href={'/contact'} className="hover:text-red-500">Contact</Link>
                                </li>
                                <li>
                                    <Link href={'/'} onClick={logout} className="hover:text-red-500">Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href={'/login'} className="hover:text-red-500">Login</Link>
                                </li>
                                <li>
                                    <Link href={'/signup'} className="hover:text-red-500">Signup</Link>
                                </li>
                                <li>
                                    <Link href={'/contact'} className="hover:text-red-500">Contact</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        );
    };


    return (

        <NavBar />

    )

}


export default Navbar