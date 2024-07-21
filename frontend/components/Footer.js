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
        if (login) {
            return (
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <ul>
                                    <li><Link className="grey-text text-lighten-3" href={'/products'}>Products</Link></li>
                                    <li><Link className="grey-text text-lighten-3" href={'/seller'}>Seller</Link></li>
                                    <li><Link className="grey-text text-lighten-3" href={'/contact'}>Contact</Link></li>
                                    <li><Link className="grey-text text-lighten-3" href={'/'} onClick={logout}>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            )
        } else {
            return (
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <ul>
                                    <li><Link className="grey-text text-lighten-3" href={'/login'}>Login</Link></li>
                                    <li><Link className="grey-text text-lighten-3" href={'/signup'}>Signup</Link></li>
                                    <li><Link className="grey-text text-lighten-3" href={'/products'}>Products</Link></li>
                                    <li><Link className="grey-text text-lighten-3" href={'/contact'}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            )
        }
    }
    

    return (

        <Footer />

    )

}

export default Footer
