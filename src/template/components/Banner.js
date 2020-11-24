import React from "react";

function Banner() {
  return (
    <section
      id="home_section"
      className="section_banner bg_black_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="public/assets/images/banner_bg2.png"
    >
      <canvas id="banner_canvas" className="transparent_effect fixed"></canvas>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div className="margin-top-20 banner_text_s2 text_md_center ">
              <h5
                style={{display:'none'}}
                className="animation presale_txt text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                <mark className="gradient_box">
                  <span className="iconify" data-icon="bx:bxs-badge-dollar"></span>
                  Discover new ways to live supporting your visitors.
                </mark>
              </h5>
              <h1
                className="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                Mr. Assistant Chatbot is a versatile WordPress Plugin for 24/7
                Live Support.
              </h1>
              <p
                className="lead animated fadeInUp"
                data-animate="fadeInUp"
                data-delay=".9"
                style={ {visibility : "visible", animationDelay: "0.9s"}}
              >
                An Innovative Artificial Intelligence Live ChatBot with a search
                engine, knowledge base, and unlimited custom Actions. It can
                empower your search and boost your seals. Actions let users get
                things done through a conversational interface that can range
                from a quick command.
              </p>
              <div
                className="btn_group pt-2 pb-3 animation hide"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                <a
                  href="public/https://shop.mrassistant.tech/"
                  className="btn btn-default btn-radius nav-link"
                >
                  E-Commerce Demo{" "}
                  <span className="iconify" data-icon="bx:bxs-cart-add"></span>
                </a>
                <a
                  href="public/https://docs.mrassistant.tech/"
                  className="btn btn-border btn-radius"
                >
                  Documentation{" "}
                  <span className="iconify" data-icon="cib:sentry"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
              data-animation-delay="1.5s"
              data-animation="fadeInRight"
            >
              <div className="waves-block">
                <img alt="banner_vector" src="public/assets/images/intro.png" />
                <div className="promo-video">
                  <div className="waves-block2">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                  <a
                    href="public/https://www.youtube.com/watch?v=vQLOBashH-I"
                    id="introVideo"
                    className="video animation hide video-btn"
                    data-animation="fadeInUp"
                    data-animation-delay="1s"
                  >
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
