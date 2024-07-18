"use client"

import React,{useEffect} from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
    data: any
}

const Uslugi: React.FC<Props> = ({data}) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

   const cards = data?.map((el:{id:number, title:string,img:string})=>(
        <div className="card" key={el.id}>
            <Image src={el.img} alt={el.title} width={30} height={30} />
            <p>{el.title}</p>
        </div>
   ))
    
  return (
   <>
    <section id='uslugi'>
    <div className="container">
       <div data-aos="fade-up" className="text_wrapper_uslugi">
        <h1>Наши услуги</h1>
       </div>

       <div data-aos="zoom-in-up" className="cards_wrapper_uslugi">
        {  cards}
       </div>
    </div>
    </section>
   </>
  )
}

export default Uslugi