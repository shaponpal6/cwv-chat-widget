import React from "react";

function Header() {
  return (
    <div>
      <div id="loader-wrapper">
        <div id="loading-center-absolute">
          <div className="object" id="object_four"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_one"></div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <header className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg hide">
            <a
              className="navbar-brand page-scroll animation"
              href="public/#home_section"
              data-animation="fadeInDown"
              data-animation-delay="1s"
            >
              <img
                className="logo_light"
                src="public/./assets/images/mr-assistant-logo.png"
                alt="logo"
              />
              <img
                className="logo_dark"
                src="public/./assets/images/mr-assistant-logo.png"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler animation"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-animation="fadeInDown"
              data-animation-delay="1.1s"
            >
              <span className="ion-android-menu"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.1s"
                >
                  <a
                    className="nav-link page-scroll nav_item active"
                    href="public/#"
                  >
                    Home
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className="nav-link page-scroll nav_item" href="public/#about">
                    About
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.4s"
                >
                  <a
                    className="nav-link page-scroll nav_item"
                    href="public/#chat-with-visitors"
                  >
                    Features
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.5s"
                >
                  <a
                    className="nav-link page-scroll nav_item"
                    href="public/#technology "
                  >
                    Technology
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.6s"
                >
                  <a
                    className="nav-link page-scroll nav_item"
                    target="_blank"
                    href="public/https://docs.mrassistant.tech/"
                  >
                    Documentation
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.7s"
                >
                  <a className="nav-link page-scroll nav_item" href="public/#faq">
                    FAQ
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav nav_btn align-items-center">
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.9s"
                >
                  <div className="lng_dropdown">
                    <select name="countries" id="lng_select">
                      <option
                        value="v1"
                        data-image="assets/images/mr.png"
                        data-title="Version 1.0"
                      >
                        1.0
                      </option>
                    </select>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="2s"
                >
                  <a
                    className="btn btn-default btn-radius nav_item"
                    href="public/#"
                  >
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
