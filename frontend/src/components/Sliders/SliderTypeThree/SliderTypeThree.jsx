import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useEffect, useRef } from "react";
const Wrapper = styled.div`
  margin: auto;
  border: 1px solid black;
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  /* margin: auto; */
  position: relative;
  box-sizing: border-box;
  padding: 0 50px;
  img {
    height: 100%;
    width: 100%;
  }

  .prevArrow,
  .nextArrow {
    position: absolute;

    img {
      width: 50px;
      cursor: pointer;
    }
  }

  .nextArrow {
    right: 20px;
    z-index: 1;
    top: calc(${(props) => (props.height ? props.height : "auto")} / 2);
    transform: translate(0, -50%);
  }
  .prevArrow {
    z-index: 1;
    left: 0px;
    top: calc(${(props) => (props.height ? props.height : "auto")} / 2);
    transform: translate(0, -50%);
  }
  .slick-list {
    box-sizing: initial;
    padding: 0px 5px;
  }
`;

export const SliderTypeThree = ({
  data,
  height,
  width,
  arrows,
  cardHeight,
  cardWidth,
  cardPadding,
}) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    focus: false,
    arrows: false,
    // nextArrow: <SampleNextArrow className={"sliderArrowLeft"} />,
    // prevArrow: <SamplePrevArrow className={"sliderArrowRight"} />,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
    let { currentSlide, slideCount } = sliderRef.current.innerSlider.state;
    console.log(currentSlide, slideCount);
  };

  return (
    <Wrapper height={height} width={width}>
      <div className="prevArrow">
        <img
          src="https://www.1mg.com/images/prev-round.svg"
          alt=""
          onClick={() => {
            console.log(sliderRef);
            sliderRef.current.slickPrev();
            let {
              currentSlide,
              slideCount,
            } = sliderRef.current.innerSlider.state;
            console.log(currentSlide, slideCount);
          }}
        />
      </div>
      <div className="nextArrow">
        <img
          src="https://www.1mg.com/images/next-round.svg"
          alt=""
          onClick={() => nextSlide()}
        />
      </div>
      <Slider {...settings} ref={sliderRef}>
        {data.map((el, i) => {
          return (
            <Card
              key={i}
              {...el}
              cardHeight={cardHeight}
              cardWidth={cardWidth}
              cardPadding={cardPadding}
            />
          );
        })}
      </Slider>
    </Wrapper>
  );
};
