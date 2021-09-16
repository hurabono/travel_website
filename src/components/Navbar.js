import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Navbar.css";
import useStyles from "./ThreeCardsStyle";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const classes = useStyles();

  const [onClick, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!onClick);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRIPF
            <i className="fas fa-plane-departure" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={onClick ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={onClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/#home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#nearBy"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trip
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              className={classes.nav_button}
              variant="outlined"
              size="large"
            >
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
