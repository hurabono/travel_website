import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    // EMAIL SUBSCRIPTION SECTION
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newletter to receive our best vaction deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscription at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your email"
            />

            <Button className="footerButton" variant="outlined" size="large">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/">
              <h2>About Us</h2>
            </Link>
          </div>

          <div className="footer-link-items">
            <Link to="/">
              <h2>Contact Us</h2>
            </Link>
          </div>

          <div className="footer-link-items">
            <Link to="/">
              <h2>Terms and policy</h2>
            </Link>
          </div>

          <div className="footer-link-items">
            <Link to="/">
              <h2>customer support</h2>
            </Link>
          </div>

          <div className="footer-link-items">
            <Link to="/">
              <h2>contact us</h2>
            </Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRIPF
              <i className="fas fa-plane-departure" />
            </Link>
          </div>
          <small class="website-rights">TRIPF ?? 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
