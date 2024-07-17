import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Hero = () => {
  const slides = [
    {
      url: "https://theme.hstatic.net/200000580329/1000937158/14/slide_3_img.jpg?v=96tps://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee4257c40370431e93f2afc000cc526e_9366/Quan_Short_San_Nha_Manchester_United_23-24_trang_HR3678_21_model.jpg",
    },
    {
      url: "https://theme.hstatic.net/200000580329/1000937158/14/collection_banner.jpg?v=96",
    },
    {
      url: "https://theme.hstatic.net/200000580329/1000937158/14/slide_4_img.jpg?v=96",
    },
    {
      url: "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=80,format=auto/uploads/September2023/Ready-2-wear-banner19_84.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto pb-[10rem] px-4 relative group">
      <Link to="/products">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </Link>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
