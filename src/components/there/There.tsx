"use client"
import React,   { useEffect } from 'react'
import Image from 'next/image'
import bg from '../../assets/images/goodzone_app.png'
import delver from '../../assets/images/goodzone_title.png'
import icon from '../../assets/images/godzon_icon.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'


type data = {
    id: number
    img: string
    title: string
}

type Props = {
    data: data[]
}

const There: React.FC<Props> = ({data}) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, [])

const cards = data?.map((item: data) => (
     <div className="portfolio_card" key={item.id}>
         <Image src={item.img} alt="img" width={56} height={56} />
         <p>{item.title}</p>
     </div>
))


    return (
        <>
            <section className='portfolio' id='Goodzone'>
                <div className="container" data-aos="fade-up">
                    <div className="big_wrapper_portfolio">
                        <div className='img_wrapper_portfolio' data-oss="zoom-in-up">
                            <Image src={bg} alt="bg" width={547} height={407} />
                        </div>
                        <div className='text_wrapper_portfolio'>
                            <Image src={delver} alt="delver" width={252} height={49} className='delver' />
                            <div className="icons_wrapper "  style={{background: "rgba(245, 0, 0, 0.2)", color:" #F50000",width:"170px"}}>
                                <Image src={icon} alt="icon" width={25} height={25} />
                                <span>E-Commerce</span>
                            </div>
                            <p>Goodzone - Internet shop of household appliances in Uzbekistan.</p>
                            <h3>Мы разрабатывали:</h3>
                            <div className="portfolio_card_wrapper">
                              {cards}
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default There