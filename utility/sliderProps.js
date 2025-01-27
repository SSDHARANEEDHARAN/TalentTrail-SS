function Arrow(props) {
  const { onClick, icon } = props;
  return <i className={icon} onClick={onClick} />;
}

export const sliderProps = {
  blogSlider: {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: <Arrow icon="fas left icon fa-arrow-left" />,
    nextArrow: <Arrow icon="fas right icon fa-arrow-right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  testimonialSlider: {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: <Arrow icon="fas left icon fa-arrow-left" />,
    nextArrow: <Arrow icon="fas right icon fa-arrow-right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
};
