"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import img1 from '../../assets/images/phone_two.png'
import img2 from '../../assets/images/bg_png.png'
import img3 from '../../assets/images/ui1.svg'
import img4 from '../../assets/images/ui2.svg'
import img5 from '../../assets/images/ui3.svg'
import img6 from '../../assets/images/ui4.svg'
import img7 from '../../assets/images/ui5.svg'
import img8 from '../../assets/images/ui6.svg'
import img9 from '../../assets/images/skills/figma.svg'
import img10 from '../../assets/images/skills/sketch.svg'
import img11 from '../../assets/images/skills/lottie.svg'
import img12 from '../../assets/images/skills/illustrator.svg'

import Aos from 'aos'
import 'aos/dist/aos.css'
interface ErpProps {
    id: number
    title: string
    img: string
    width?: number
}

const Dizyn: React.FC = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, [])

    const DizynCards = [
        {
            id: 1,
            title: 'Ux',
            img: img3,
        },
        {
            id: 2,
            title: 'UI',
            img: img4,
        },
        {
            id: 3,
            title: 'Prototyping',
            img: img5,
        },
        {
            id: 4,
            title: 'Mobile Design',
            img: img6,
        },
        {
            id: 5,
            title: 'Web Design',
            img: img7,
        },
        {
            id: 6,
            title: 'Atomic Design',
            img: img8,
        },
    ]

    const dizayn_skils = [
        {
            id: 1,
            title: 'Figma',
            img: img9,
            width: 56
        },
        {
            id: 2,
            title: 'Sketch',
            img: img10,
            width: 56
        },
        {
            id: 3,
            title: 'Lottie',
            img: img11,
            width: 40
        },

        {
            id: 4,
            title: 'Illustrator',
            img: img12,
            width: 56
        }
    ]

    const cardDizayn = DizynCards.map((el: ErpProps) => (

        <div className='erp_card' key={el.id}>
            <Image src={el.img} alt="erp" width={56} height={56} />
            <h3>{el.title}</h3>
        </div>

    ))

    const cards_mobilni_two = dizayn_skils.map((el: ErpProps) => {
        return (
            <div className="card__mobilni_two" key={el.id}>
                <Image src={el.img} alt={el.title} width={el.width} height={56} />
                <h3>{el.title}</h3>
            </div>
        )
    })

    return (
        <>
            <section id="dizyn" className="dizyn">
                <div className="container" data-aos="fade-up">
                    <h1>UI / UX Дизайн</h1>
                    <div className="erp_big_wrapper">
                        <div className="erp_text_container">
                            <p>Наша компания придерживается подхода к дизайну, ориентированного на человека..</p>
                            <div className="erp_card_wrapper">
                                {cardDizayn}
                            </div>
                            <h2>Технологии</h2>
                            <div className="mobilni_wrapper_two">
                                {cards_mobilni_two}
                            </div>
                        </div>
                        <div className="erp_imgs_wrapper">
                            <Image src={img2} alt="erp" width={500} height={656} />
                            <Image src={img1} alt="erp" width={500} className='img2' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dizyn