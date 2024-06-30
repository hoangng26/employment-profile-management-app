import { Carousel, CarouselProps } from 'antd';
import React, { PropsWithChildren } from 'react';

const CustomCarousel: React.FC<PropsWithChildren> = ({ children }) => {
  const setting: CarouselProps = {
    speed: 1000,
    autoplay: true,
    lazyLoad: 'progressive',
    draggable: true,
    swipe: true,
    dots: false,
  };

  return <Carousel {...setting}>{children}</Carousel>;
};

export default CustomCarousel;
