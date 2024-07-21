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
        if (login) {
            return (
                <nav>
                    <div className="nav-wrapper">
                        <Link href={'/'} className="brand-logo">Logo</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/products'}>Products</Link></li>
                            <li><Link href={'/seller'}>Become Seller</Link></li>
                            <li><Link href={'/contact'} >Contact</Link></li>
                            <li><Link href={'/'} onClick={logout}>Logout</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav>
                    <div className="nav-wrapper">
                        <Link href={'/'} className="brand-logo">Logo</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/products'}>Products</Link></li>
                            <li><Link href={'/login'}>Login</Link></li>
                            <li><Link href={'/signup'}>Signup</Link></li>
                            <li><Link href={'/contact'} >Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }


    return (

        <NavBar />

    )

}


export default Navbar