"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import  konstalting from '../../assets/images/konstalting.svg'

import img1 from '../../assets/images/it1.svg'
import img2 from '../../assets/images/it2.svg'
import img3 from '../../assets/images/it3.svg'
import img4 from '../../assets/images/it4.svg'
import img5 from '../../assets/images/it5.svg'
import img6 from '../../assets/images/it6.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface data {
    id: number
    img: string
    title: string
}
const IT: React.FC = () => {


    useEffect(() => {
       AOS.init({duration: 1000,once: true});
    }, [])


    const data = [ 
        {
            id: 1,
            title:"Frontend",
            img:img1
        },
        {
            id: 2,
            title:"Backend",
            img:img2
        },
        {
            id: 3,
            title:"Architecture",
            img:img3
        },
        {
            id: 4,
            title:"DevOps",
            img:img4
        },
        {
            id: 5,
            title:"UX/UI",
            img:img5
        },
        {
            id: 6,
            title:"QA",
            img:img6
        },
    ]


    const It = data.map((el: data) => (
      
        <div className='erp_card' key={el.id}>
              <Image src={el.img} alt="erp" width={56} height={56} />
              <h3>{el.title}</h3>
        </div>

    ))


  return (
    <section className='mobilni' id='it'>
        <div className="container" data-aos="fade-up">
            <h1>IT консалтинг</h1>
            <div className="erp_big_wrapper">
                    <div className="erp_text_container">
                        <p>Мы можем повысить квалификацию ваших сотрудников тем самым увеличить эффективность вашей компании.</p>
                        <div className="erp_card_wrapper">
                            {It}
                        </div>
                    </div>
                    <div className="erp_imgs_wrapper">
                        <Image data-aos="zoom-in" src={konstalting} alt="erp" width={500} />
                    </div>
                </div>
        </div>
    </section>
  )
}

export default IT