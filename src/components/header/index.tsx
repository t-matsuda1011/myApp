import React from 'react';
import GrobalNaV from '../global-nav';
import Link from 'next/link';

const Header = () => {
    return (
        <header style={{zIndex: "1001"}} className="fixed top-0 w-full bg-gray-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="text-lg font-bold hover:text-gray-200 transition-all"><Link href="/">まつだ</Link></h1>
                <GrobalNaV />
            </div>
        </header>
    );
};

export default Header;