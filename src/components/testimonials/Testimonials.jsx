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
    name: 'Berna Tozcu',
    review:'Web sitemi daha önce bir başka firmaya yaptırmıştım.Site sonrasında çıkan hatalar ile ilgilenmediler.AKT yazılım ile tanıştım şuanda çok memmunum.'
  },
  {
    id:2,
    avatar:AVTR2,
    name: 'İsmail Avlu',
    review:'Merhaba, Kurumsal e-ticaret sitemizi AKT yazılım tasarladı.Şuanda herşey çok güzel ilginizden dolayı teşekkürederiz.'
  },
  {
    id:3,
    avatar:AVTR3,
    name: 'Ali Çolak',
    review:'Pdrc Oto firmam için müşteri araç takip yazılımı yaptırdım.Müşterilerim araçlarını servisimize bıraktıkdan sonra aracı için yapılan tüm işlemlere canlı ulaşabiliyor teşekkürler.'
  },
  {
    id:3,
    avatar:AVTR4,
    name: 'Yıldız Kara',
    review:'Fulya da petshop hizmeti veriyoruz.Ürünlerimizi internetden satmak için AKT ile tanıştık ve e-ticaret sitemiz şuanda aktif.Çok ilgililer teşekkür ederiz.'
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

