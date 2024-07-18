"use client"
import React, { useEffect } from 'react'
import kompyuter from '../../assets/images/kompyuter.png'
import bg from '../../assets/images/bg_png.png'
import Image from 'next/image'
import { title } from 'process'
import AOS from 'aos';
import 'aos/dist/aos.css'
import img1 from "../../assets/images/ar1.svg"
import img2 from "../../assets/images/ar2.svg"
import img3 from "../../assets/images/ar3.svg"
import img4 from "../../assets/images/ar4.svg"
import img5 from "../../assets/images/ar5.svg"
import img6 from "../../assets/images/ar6.svg"
import img7 from "../../assets/images/ar7.svg"

interface data {
    id:number
    title:string
    img:string

}

const Construktor:React.FC = () => {

    useEffect(() => {
        AOS.init({duration:1000,once:true});
    }, [])

    const data = [
        {
            id:1,
            title:"Architecture",
            img:img1
        },
        {
            id:2,
            title:"Auto testing",
            img:img2
        },
        {
            id:3,
            title:"Stress testing",
            img:img3
        },
        {
            id:4,
            title:"Load testing",
            img:img4
        },
        {
            id:5,
            title:"Devops",
            img:img5
        },
        {
            id:6,
            title:"Cloud",
            img:img6
        },
        {
            id:7,
            title:"CI / CD",
            img:img7
        }
    ]
    const cards = data.map((el: data) => (
      
        <div className='erp_card' key={el.id}>
              <Image src={el.img} alt="erp" width={56} height={56} />
              <h3>{el.title}</h3>
        </div>

    ))

  return (
   <section className="construktor" id='construktor'>
       <div className="container" data-aos="fade-up">
         <h1>Оптимизация инфраструктуры</h1>
         <div className="erp_big_wrapper">
                    <div className="erp_imgs_wrapper">
                        <Image src={bg} alt="erp" width={500} />
                        <Image src={kompyuter} alt="erp" width={500} className='img2' />
                    </div>
                    <div className="erp_text_container">
                        <p>Наши опытные специалисты помогут оптимизировать вашу инфраструктуру.</p>
                        <div className="erp_card_wrapper">
                            {cards}
                        </div>
                    </div>
                </div>
       </div>
   </section>
  )
}

export default Construktor