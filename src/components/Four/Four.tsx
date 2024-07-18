"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import bg from '../../assets/images/iman_bg.png'
import delver from '../../assets/images/iman_title.svg'
import icon from '../../assets/images/iman_icon.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img8 from '../../assets/images/por2.svg'
import img9 from '../../assets/images/por3.svg'
import img4 from '../../assets/images/navbarImg/phone.svg'

type data = {
    id: number
    img: string
    title: string
}



const Four: React.FC = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, [])


    const data = [

        {
            id: 1,
            title: "Mobile design ",
            img: img4
        },
        {
            id: 2,
            title: "Admin panel",
            img: img8
        },

        {
            id: 3,
            title: "Crossplatform",
            img: img9
        },
    ]

    const cards = data?.map((item: data) => (
        <div className="portfolio_card" key={item.id}>
            <Image src={item.img} alt="img" width={56} height={56} />
            <p>{item.title}</p>
        </div>
    ))


    return (
        <>
            <section className='portfolio' id='Iman'>
                <div className="container" data-aos="fade-up">
                    <div className="big_wrapper_portfolio">
                        <div className='text_wrapper_portfolio'>
                            <Image src={delver} alt="delver" width={252} height={49} className='delver' style={{ marginLeft: "-50px" }} />
                            <div className="icons_wrapper " style={{ background: "rgba(1, 202, 176, 0.2)", color: "#01CAB0", width: "170px" }}>
                                <Image src={icon} alt="icon" width={25} height={25} />
                                <span>Finance</span>
                            </div>
                            <p>Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.</p>
                            <h3>Мы разрабатывали:</h3>
                            <div className="portfolio_card_wrapper">
                                {cards}
                            </div>
                        </div>
                        <div className='img_wrapper_portfolio' data-oss="zoom-in-up">
                            <Image src={bg} alt="bg" width={547} height={407} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Four