import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Testimonials } from './Testimonials'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import "./style.css"

const CardSlider = () => {
    return (
        <div className='container  '>
        <Swiper
          // install Swiper modules
          breakpoints={{


            320: {
                
              spaceBetween: 10,
              slidesPerView: 1.5,
              centeredSlides: true,
              navigation: false,
            }, 
            576: {
                spaceBetween: 10,
                navigation: false,
                slidesPerView: 2,
                
            },
            768: {
                navigation: false,
                spaceBetween: 10,
              slidesPerView: 2,
            },
            1024: {
               
                spaceBetween: 20,
                slidesPerView: 3,
              },
          }}
      
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='swiper-slide  px-5 '>
                <img src="src/images/monials1.png" alt=""  className='w-12 h-12'/>
               
                <Testimonials Testimonial="“ The team provided us with a great redesign that has improved both the look and functionality of our site. It’s more user-friendly and performs better. We’re very happy with the outcome. ”" name="Jane Smith" responsability="Lead at Creative Solutions" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide  px-5'>
                <img src="src/images/monials2.png" alt=""  className='w-12 h-12'/>
                
                <Testimonials Testimonial="“ The team delivered a fantastic redesign that greatly improved the user experience. The site is now much faster and more visually appealing. ”" name="John Doe" responsability="Manager at TechX" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide  px-5'>
                <img src="src/images/monials3.png" alt=""  className='w-12 h-12'/>
                
                <Testimonials Testimonial="“ I am very satisfied with the results of our website redesign. The new look is clean, professional, and the navigation is much smoother. We’ve noticed better engagement from our visitors, and the team was a pleasure to work with. ”" name="Emily Davis" responsability="PDG at Visionary Designs" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide  px-5'>
                <img src="src/images/monials4.png" alt=""  className='w-12 h-12'/>
                
                <Testimonials Testimonial="“ The website redesign is exactly what we were looking for. It’s clean, modern, and user-friendly. Our customers have noticed the improvements, and the navigation is much easier now. Great work! ”" name="David Brown" responsability="Director at WebWave" />
          </SwiperSlide>
          
          
        </Swiper>
        </div>
      );
};

export default CardSlider;