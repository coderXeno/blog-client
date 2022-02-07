import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="nav-top border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold text-lg text-white">
            <ul className="nav-ul">
                <li className="ul-item inline-block pt-4 pb-4">
                    <Link to="/" className="ul-link pl-6 pr-8">Home</Link>
                </li>

                <li className="ul-item inline-block pt-4 pb-4">
                    <Link to="/about" className="ul-link pl-6 pr-8">About</Link>
                </li>

                <li className="ul-item inline-block pt-4 pb-4">
                    <Link to="/articles-list" className="ul-link pl-6 pr-8">Articles</Link>
                </li>
            </ul>
        </nav>
    )
}