// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/photo-gallery/img1.jpg'
import img2 from '../../../assets/photo-gallery/img2.jpg'
import img3 from '../../../assets/photo-gallery/img3.jpg'
import img4 from '../../../assets/photo-gallery/img4.jpg'
import img5 from '../../../assets/photo-gallery/img5.jpg'
import img6 from '../../../assets/photo-gallery/img6.jpg'
import img7 from '../../../assets/photo-gallery/img7.jpg'
import img8 from '../../../assets/photo-gallery/img8.jpg'
import img9 from '../../../assets/photo-gallery/img9.jpg'
import img10 from '../../../assets/photo-gallery/img10.jpg'
import img11 from '../../../assets/photo-gallery/img11.jpg'
import img12 from '../../../assets/photo-gallery/img12.jpg'
import img13 from '../../../assets/photo-gallery/img13.jpg'
import img14 from '../../../assets/photo-gallery/img14.jpg'
import img15 from '../../../assets/photo-gallery/img15.jpg'
import img16 from '../../../assets/photo-gallery/img16.jpg'
import img17 from '../../../assets/photo-gallery/img17.jpg'
import img18 from '../../../assets/photo-gallery/img18.jpg'
const PhotoGallery = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-green-500 font-bold mb-10 mt-20'>Photo <span className='text-orange-500'>Gallery</span></h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img13} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img14} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img15} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img16} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img17} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='rounded hover:animate-pulse h-[300px] w-[500px]' src={img18} alt="" />
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    );
};

export default PhotoGallery;