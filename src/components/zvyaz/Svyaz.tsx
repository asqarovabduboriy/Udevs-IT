"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/images/call.svg'
import img2 from '../../assets/images/analiz.svg'
import img3 from '../../assets/images/predlojeniya.svg'
import img4 from '../../assets/images/komanda.svg'
import img5 from '../../assets/images/start.svg'
import line from "../../assets/images/line.svg"
import Image from 'next/image';

type data = {
    id: number
    title: string
    img: string
    text: string
}

const Svyaz: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, [])

    const data = [
        {
            id: 1,
            title: "Cвязь",
            text: "Отправьте нам свой запрос на проект или идею проекта.",
            img: img1
        },
        {
            id: 2,
            title: "Анализ",
            text: "Мы свяжемся с вами, чтобы уточнить ваши требования к проекту.",
            img: img2
        },
        {
            id: 3,
            title: "Предложение",
            text: "Мы предоставим вам нашу бесплатную, не имеющую обязательной силы заявку.",
            img: img3
        },
        {
            id: 4,
            title: "Команда",
            text: "Мы выделяем команду под ваши требования.",
            img: img4
        },
        {
            id: 5,
            title: "Старт",
            text: "Вы познакомитесь с командой, и мы начнем.",
            img: img5
        }
    ]

    const cards = data.map((item: data) => {
        return (
            <div className="card__svyaz" key={item.id}>
                <div className='image_warpper_svyaz'>
                    <Image src={item.img} alt="" />
                    {item.id !== 5 ? <Image className='line' src={line} alt="" /> : <></>}
                </div>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <section className='mobilni'>
                <div className="container" data-aos="fade-up">
                    <h1>Как мы работаем!</h1>
                    <div className="cards_svyaz_wrapper">
                        {cards}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Svyaz