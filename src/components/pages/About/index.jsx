/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "../../Button";

import card1Right from "../../../assets/card1Right.svg";

import "./About.scss";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow" onClick={onClick}>
      {/* ➡️ */}
      <img
        src={
          "https://zeropark.com/wp-content/themes/zeropark/dist/912d2d68380c6beca74f.svg"
        }
        alt=""
      />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow" onClick={onClick}>
      <img
        src={
          "https://zeropark.com/wp-content/themes/zeropark/dist/912d2d68380c6beca74f.svg"
        }
        alt=""
      />
    </div>
  );
};

const About = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div className="aboutContainer">
      <div className="aboutHero">
        <div className="heroHeading">
          People who make <br /> the performance happen
        </div>
        <div className="heroAbout">
          Zeropark is an all-in-one commerce media platform delivering
          advertising and monetization solutions for global brands and
          businesses. We drive scalable growth with proprietary technology and
          incremental audiences ensuring full transparency and brand-safety for
          our partners.
        </div>
        <div className="heroButton">
          <Button>Contact us</Button>
        </div>
      </div>
      <div className="WhereWeCome">
        <div className="video">
          <video
            src="https://embed-ssl.wistia.com/deliveries/1fac89deb29c0bb85a134877e369275f8b946200/file.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="cards">
          <div className="left">
            <div className="heading">Where we come from </div>
            <div className="info">
              Being a part of the ad tech industry for 10+ years, Zeropark has
              come a long way from an exciting affiliate start-up to a globally
              operating commerce media platform for brands and agencies.
            </div>
          </div>
          <div className="left">
            <div className="heading">Where we are headed </div>
            <div className="info">
              Just like the advertising industry, Zeropark keeps changing.
              That's why we're focused on using cutting-edge technology to
              deliver incremental, high-intent audiences for brands and
              marketers
            </div>
          </div>
        </div>
      </div>

      <div className="partOfSomething aboutContainerWidth">
        <div className="heading">Part of something bigger</div>
        <div className="createdBySection aboutContainer">
          <div className="innerCards">
            <div className="upperCards">
              <div className="left">
                <div className="heading">Created by…</div>
                <div className="info">
                  Zeropark is a product of Commerce Media Tech, an ad-tech
                  solutions provider for effective online advertising. Together
                  we’re responsible for driving efficient growth to marketers
                  and media owners in the commerce media space.
                </div>
                <Button>Learn More</Button>
              </div>
              <div className="imageParent">
                <img src={card1Right} alt="" />
              </div>
            </div>
            <div className="upperCards">
              <div className="imageParent">
                <img
                  src={
                    "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/teaminternet-logo.svg"
                  }
                  alt=""
                />
              </div>
              <div className="left">
                <div className="heading">Connected by…</div>
                <div className="info">
                  In 2020, Zeropark became a part of the Team Internet Group, a
                  publicly listed company uniting providers of services in the
                  domain industry and rapidly growing in the ad tech space on a
                  global scale.
                </div>
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="blueSection aboutContainer">
          <div className="inner">
            <div className="left">
              <div className="blueSection_heading">
                International <br /> communities
              </div>
              <div className="info">
                Zeropark has been recognized as a proud member of globally
                acknowledged advertising organizations, focused on supporting
                the development of innovative and compliant media services.
              </div>
              {/* <Button>Learn More</Button> */}
            </div>
            <div className="rightImage">
              <img
                src={
                  "	https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/communities-logos2.svg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="meetTheTeam aboutContainerWidth">
        <div className="upper">
          <div className="heading">
            Meet the people <br /> behind Zeropark
          </div>
          <div className="info">
            The Zeropark team is made of 60+ people who make the performance
            happen every single day.
          </div>
          <div className="info">
            Whether it’s various Business, Technology, Product, or Compliance
            Teams, our in-house experts are here to provide Zeropark partners
            with innovative solutions for scalable growth of their brand.
          </div>
          <div className="info bold">
            The perfect combination of multinational talent and expertise on the
            Zeropark board is led by:
          </div>
        </div>

        <div className="slider">
          <Slider {...settings}>
            {[0, 1, 2, 3, 44, 5, 6, 6]?.map((data, i) => {
              return (
                <div key={i} className="card">
                  <img
                    src={
                      "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images-optimized//petr-big@2x.webp"
                    }
                    alt=""
                  />
                  <div className="bottomContent">
                    <div className="name">Joe Root</div>
                    <div className="info">Software Enginner</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="basedGlobally aboutContainer">
          <div className="heading">Based globally</div>
          <div className="map">
            <img
              src={
                "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/map.svg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="recognizeBy aboutContainer">
          <div className="heading">Recognized by</div>
          <div className="images">
            {[
              "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/ft2023-logo.svg",
              "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/ft2022-logo.svg",
              "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/ft2019-logo.svg",
              "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/ft2018-logo.svg",
              "https://zeropark.com/wp-content/themes/zeropark/landing-pages/about-us/images/ft2017-logo.svg",
            ].map((data, i) => {
              return <img key={i} src={data} alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
