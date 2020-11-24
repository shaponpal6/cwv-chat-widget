import React from "react";

function Section(props) {
  return (
    <div>
      <section className="section section-l" id={props.id}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div className="title_default_light title_border text-center">
                <h4
                  className="animation animated fadeInUp"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                  style={{animationDelay: '0.2s', opacity: 1}}
                  title="Chat with visitors"
                >
                  {props.title}
                </h4>
                <p
                  className="animation animated fadeInUp"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                  style={{animationDelay: '0.4s', opacity: 1}}
                >
                  {props.desc}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-md-center">
            <div className="col-lg-10 col-md-10 col-sm-10">
              <div
                className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
                data-animation-delay="1.5s"
                data-animation="fadeInRight"
              >
                <div className="waves-block">
                  <img
                    alt="banner_vector"
                    src="public/assets/images/manage-multi.jpg"
                  />
                  <div className="promo-video">
                    <div className="waves-block2">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                    <a
                      href="public/https://www.youtube.com/watch?v=ePaS9hGOx34"
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
    </div>
  );
}

export default Section;
