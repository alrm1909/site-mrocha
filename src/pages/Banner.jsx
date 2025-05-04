import React from 'react';
import Slider from 'react-slick';

import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
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
        width: '100%',
        height: '400px', // altura desejada do banner
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {imagens.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              style={{
                width: '100%',
                height: '500px', // força altura fixa para a imagem também
                objectFit: 'cover',
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
