import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=
[
  {
    id:1,
    avatar:AVTR1,
    name: 'Tina Snow',
    review:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500 lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.'
  },
  {
    id:2,
    avatar:AVTR2,
    name: 'Shatta Wale',
    review:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500 lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.'
  },
  {
    id:3,
    avatar:AVTR3,
    name: 'Kwame Despite',
    review:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500 lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.'
  },
  {
    id:3,
    avatar:AVTR4,
    name: 'Kwame Despite',
    review:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500 lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
           scrollbar={{ draggable: true }}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({id,avatar,name,review})=>{
            return(
              <SwiperSlide key={id} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt='Avatar One' />
               
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials

