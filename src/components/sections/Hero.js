import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Progress Tracking for <br></br>
              <span className="text-color-primary">
                Competitive Baseball Teams
              </span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                We help high performing teams record, manage, and understand
                their most important practice data. Check out the video below to
                learn more.
              </p>
              {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#newsletter">
                    Get started
                  </Button>
                </ButtonGroup>
              </div> */}
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            {/* <iframe
              src="https://player.vimeo.com/video/564760305?autoplay=1&loop=1"
              width="320"
              height="434"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe> */}
            {/* <a
              data-video="https://player.vimeo.com/video/564760305"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
              className="has-shadow"
              src={require("./../../assets/images/metsPurple3.png")}
              alt="Hero"
              width={896}
              height={504}
            /> 
            </a> */}
          </div>
          <div className="container-xs mt-16">
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <ButtonGroup>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="https://vizn-stats.web.app/create"
                >
                  Sign Up
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
