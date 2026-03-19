import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() 
{
  const navigate=useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="xo-header">
      <div className="xo-header-inner">
        <button
          className="xo-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className="xo-nav xo-nav-left">
          <a href="/">HOME</a>
          <a href="#">SHOP</a>
        </nav>

        <div style={{cursor:'pointer'}} className="xo-logo" onClick={()=>navigate('/')}>XOFFENCER</div>

        <nav className="xo-nav xo-nav-right">
          <a href="/about">ABOUT US</a>
          <a href="/contact" className="active">CONTACT US</a>
          <a href="#" className="xo-login">
            <span className="xo-user-icon">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9C11.4853 9 13.5 6.98528 13.5 4.5C13.5 2.01472 11.4853 0 9 0C6.51472 0 4.5 2.01472 4.5 4.5C4.5 6.98528 6.51472 9 9 9Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M1 19C1.8 15.2 4.6 13 9 13C13.4 13 16.2 15.2 17 19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>LOG IN</span>
          </a>
        </nav>
      </div>

      <div className={`xo-mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="/">HOME</a>
        <a href="#">SHOP</a>
        <a href="/about">ABOUT US</a>
        <a href="/contact" className="active">CONTACT US</a>
        <a href="#" className="xo-login mobile-login">
          <span className="xo-user-icon">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 9C11.4853 9 13.5 6.98528 13.5 4.5C13.5 2.01472 11.4853 0 9 0C6.51472 0 4.5 2.01472 4.5 4.5C4.5 6.98528 6.51472 9 9 9Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M1 19C1.8 15.2 4.6 13 9 13C13.4 13 16.2 15.2 17 19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>LOG IN</span>
        </a>
      </div>
    </header>
  );
}