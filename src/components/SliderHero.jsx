import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cards from "/src/assets/cards.svg";
import logo from "/src/assets/logo.svg"; // Update the path as necessary

function SliderHero() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: "slick-dots custom-dots",
    // customPaging: (i) => <div className="custom-dot" />,
  };

  return (
    <div className="bg-black h-screen relative">
      <img src={logo} alt="Logo" className="absolute top-5 left-5 z-10 w-16" />
      <Slider {...settings}>
        <div>
          <SlideContent
            image={cards}
            title1="Banking made"
            title2="simple for you."
            content="All your banking needs in one place, accessible anywhere and anytime"
          />
        </div>
        <div>
          <SlideContent
            image={cards}
            title1="Card Payments"
            title2="made seamless."
            content="Create cards for seamless local and international transactions"
          />
        </div>
        <div>
          <SlideContent
            image={cards}
            title1="Withdrawal made"
            title2="simple for you."
            content="Get on-demand access to ATM cash withdrawals"
          />
        </div>
      </Slider>
    </div>
  );
}

function SlideContent({ title1, title2, content, image }) {
  return (
    <div className="text-white text-center px-10 w-full h-full flex flex-col justify-center items-center">
      <img src={image} alt="" className="w-auto h-1/4 mb-4" />
      <h1 className="text-[25px] md:text-[40px] font-bold">{title1}</h1>
      <h1 className="text-[25px] md:text-[40px] font-bold mt-2">{title2}</h1>
      <p className="mt-5 w-full md:w-[58%] text-[#48484A] leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default SliderHero;
