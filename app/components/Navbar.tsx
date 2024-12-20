"use client"
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    }

    return (
        <div>
            <nav className="bg-black  fixed top-0 left-0 w-full z-50">
                <div className="max-w-7xL mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex items-center">
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                            <Link href="/" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Home</Link>
                           <Link href="/about" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">About</Link>
                           <Link href="/contact" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Contact</Link>
                           <Link href="/education" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Qualification</Link>
                           <Link href="/faq" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">FAQ</Link>
                            
                            </div>
                        </div>

                        {/* <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                            <Link href="/"> <a className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Home</a></Link>
                           <Link href="/about"> <a className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">About</a></Link>
                           <Link href="/contact"> <a className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Contact</a></Link>
                           <Link href="/education" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Qualification</Link>
                           <Link href="/faq"> <a className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">FAQ</a></Link>
                            
                            </div>
                        </div> */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavbar}
                            >
                                {isClick ? (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                           <Link href="/" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Home</Link>
                           <Link href="/about" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">About</Link>
                           <Link href="/contact" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Contact</Link>
                           <Link href="/education" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">Qualification</Link>
                           <Link href="/faq" className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black transition">FAQ</Link>
                            
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
