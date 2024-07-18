"use client"
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import bg from '../../assets/images/bg_delver.png'
import Image from 'next/image'
import delver from '../../assets/images/Delver2.svg'
import icon from '../../assets/images/icon1.svg'

interface Propsdata {
    data: data[]
}

interface data {
    id: number
    img: string
    title: string
}

const Portfolio: React.FC<Propsdata> = ({ data }) => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
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
            <section className='portfolio' id='Delever'>
                <div className="container" data-aos="fade-up">
                    <div className="big_wrapper_portfolio">
                        <div className='img_wrapper_portfolio' data-oss="zoom-in-up">
                            <Image src={bg} alt="bg" width={547} height={407} />
                        </div>
                        <div className='text_wrapper_portfolio'>
                            <Image src={delver} alt="delver" width={252} height={49} className='delver' />
                            <div className="icons_wrapper ">
                                <Image src={icon} alt="icon" width={25} height={25} />
                                <span>Delivery</span>
                            </div>
                            <p>Delever - Delivery service automation targeted at both consumers and restaurants.</p>
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

export default Portfolio