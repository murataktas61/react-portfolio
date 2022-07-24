import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cryptoapp.png'
import IMG2 from '../../assets/portfoliome.png'
/* import IMG3 from '../../assets/portfolio3.jpg' */


const data=[
  {
    id:1,
    image:IMG1,
    title:'Cryptocurrency Tracking',
    github: 'https://github.com/murataktas61/cryptoapp',
    demo: '#'
  },
  {
    id:2,
    image:IMG2,
    title:'React Portfolio',
    github: 'https://github.com/murataktas61/react-portfolio',
    demo: '#'
  },
/*   {
    id:3,
    image:IMG3,
    title:'Crypto Currency Dashboard 3',
    github: 'www.aktyazilim.com',
    demo: 'aktyazilim.com'
  } */
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt=''></img>
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
