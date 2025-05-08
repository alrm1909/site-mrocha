import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const imagens = [banner1, banner2, banner3];

  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '100%',
        overflow: 'hidden',
        height: isMobile ? 'auto' : '500px', // ✅ banner fino em desktop, proporcional em mobile
      }}
    >
      <Slider {...settings}>
        {imagens.map((img, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px', 
                objectFit: 'fill', // ✅ cobre sem distorcer ou contain preserva sem cortar
                objectPosition: 'center center',
                display: 'block',
                borderRadius: 0,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
