"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import img1 from '../../assets/images/bg_png.png'
import img2 from '../../assets/images/kompyuter.png'

import img3 from '../../assets/images/erp1.svg'
import img4 from '../../assets/images/erp2.svg'
import img5 from '../../assets/images/erp3.svg'
import img6 from '../../assets/images/erp4.svg'
import img7 from '../../assets/images/erp5.svg'
import img8 from '../../assets/images/erp6.svg'

import Aos from 'aos';
import 'aos/dist/aos.css';


interface ErpProps {
    id: number,
    img:string,
    title:string
}
const Erp: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 1000,once: true });
    }, [])

    const erp_data = [

        {
            id:1,
            img:img3,
            title:'CRM'
        },
        {
            id:2,
            img:img4,
            title:'eLearning'
        },
        {
            id:3,
            img:img5,
            title:'E-Commerce'
        },
        {
            id:4,
            img:img6,
            title:'POS'
        },
        {
            id:5,
            img:img7,
            title:'Sms / Email'
        }
        ,{
            id:6,
            img:img8,
            title:'Warehouse'
        }
    ]

    const ErpCard = erp_data.map((el: ErpProps) => (
      
        <div className='erp_card' key={el.id}>
              <Image src={el.img} alt="erp" width={56} height={56} />
              <h3>{el.title}</h3>
        </div>

    ))

  return (
         <>
         <section id="erp" className='erp'>
            <div className="container" data-aos="fade-up">
                <h1  >ERP cистемы</h1>
                <div className="erp_big_wrapper">
                    <div className="erp_imgs_wrapper">
                        <Image src={img1} alt="erp" width={500} />
                        <Image src={img2} alt="erp" width={500} className='img2' />
                    </div>
                    <div className="erp_text_container">
                        <p>IT Системы любого уровня сложности в удобные для вас сроки.</p>
                        <div className="erp_card_wrapper">
                              {ErpCard}
                        </div>
                    </div>
                </div>
            </div>
         </section>
         </>
  )
}

export default Erp