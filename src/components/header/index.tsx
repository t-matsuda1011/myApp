import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="text-lg font-bold">まつだ</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-gray-300 transition-all">Home</Link></li>
                        <li><Link href="/about" className="hover:text-gray-300 transition-all">About</Link></li>
                        <li><Link href="/quiz" className="hover:text-gray-300 transition-all">Quiz</Link></li>
                        <li><Link href="/test" className="hover:text-gray-300 transition-all">Test</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;