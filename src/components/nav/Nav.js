import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='py-4 bg-red-500'>
            <div className='max-w-6xl mx-auto md:flex justify-between p-3 md:p-0'>
                <div className="logo text-white">
                    <h2 className='hidden md:block font-bold text-2xl'>Quiz For Test Yourself</h2>
                </div>
                <div className="nav-link text-center">
                    <Link to='/'>Home</Link>
                    <Link to='/Quiz'>Quiz</Link>
                    <Link to='/Statistics'>Statistics</Link>
                    <Link to='/Blog'>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;