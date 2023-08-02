import React from "react";

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <a href="/" className="mx-1">
          Home
        </a>
        |
        <a className="mx-1" href="/about-us">
          About Us
        </a>
        |
        <a className="mx-1" href="/terms">
          Terms
        </a>
      </p>
      <p className="m-0">
        Copyright &copy;
        <span> </span>
        2022
        <span> </span>
        <a href="/" className="text-muted">
          ComplexApp
        </a>
        .<span> </span>
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
