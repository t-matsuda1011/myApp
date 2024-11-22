import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="text-lg font-bold">まつだ</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-300">About</a></li>
                        <li><a href="/quiz" className="hover:text-gray-300">Quiz</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;