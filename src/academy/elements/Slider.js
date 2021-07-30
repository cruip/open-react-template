import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ children }) => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderComponent;
