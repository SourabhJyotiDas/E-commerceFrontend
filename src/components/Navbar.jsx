import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartContext';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const { total_item } = useContext(cartContext)

    return (
        <div>

            <header className="text-gray-400 bg-gray-900 body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to={"/"}>

                        <span className="ml-3 text-xl">Norteast Electronics Store</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-white" to={"/"}>Home</Link>
                        <Link className="mr-5 hover:text-white" to={"/about"}>About</Link>
                        <Link className="mr-5 hover:text-white" to={"/contact"}>Contact</Link>
                        <Link className="mr-5 hover:text-white" to={"/products"}>All Products</Link>
                    </nav>

                    <Link to={"/cart"}>
                        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">cart
                            <span className='text-white text-xs mx-1'>{total_item}</span>
                        </button>
                    </Link>
                    {
                        isAuthenticated && (
                            <div>
                                <img className='rounded-full h-7 w-7' src={user.picture} alt={user.name} />
                            </div>
                        )
                    }

                    {
                        isAuthenticated ? <button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button> :
                            <button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0' onClick={() => loginWithRedirect()}>Log In</button>

                    }

                </div>
            </header>
        </div>
    )
}
