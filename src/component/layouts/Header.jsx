import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


export const Header = () => {

  


  return (
    <div>
      <nav
        style={{
          backgroundImage: 'linear-gradient(135deg, #23212f 5%, #9526a9 95%)',
          color: "#fff",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              fontFamily: "Arial, sans-serif",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
              margin: 0,
              textDecoration: "none",
            }}
          >
            CARTIFY
          </h1>
        </Link>

       
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "20px",
          }}
        >

<li>
            <Link
              to="about"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="login"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="cart"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
                position: "relative",
              }}
            >
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
