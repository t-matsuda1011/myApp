"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./style.css";

const GlobalNav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const submenuRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 初回チェック

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = (e) => {
        if (isMobile && !submenuVisible) {
            e.preventDefault();
            setSubmenuVisible(true);
        }
    };

    return (
        <nav className="global-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link href="/works" onClick={handleClick}>Works</Link>
                    <div className={`submenu-container ${submenuVisible ? "visible" : ""}`} ref={submenuRef}>
                        <ul className="submenu">
                            <li className="submenu-item">
                                <Link href="/works/quiz">Quiz</Link>
                            </li>
                            <li className="submenu-item">
                                <Link href="/works/gsap">Gsap</Link>
                            </li>
                            <li className="submenu-item">
                                <Link href="/works/test">Test</Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default GlobalNav;