"use client"
import React, { useEffect } from 'react'
import img1 from '../../assets/images/ios.svg'
import img2 from '../../assets/images/android.svg'
import img3 from '../../assets/images/windows.svg'
import Image from 'next/image'

import AOS from 'aos';
import 'aos/dist/aos.css';

import img4 from '../../assets/images/swift.svg'
import img5 from '../../assets/images/kotlin.svg'
import img6 from '../../assets/images/fluuter.svg'
import img7 from '../../assets/images/phone_one.png'
import img8 from '../../assets/images/bg_png.png'
import { once } from 'events'



interface data {
    id: number,
    img: string,
    title: string
}

const Mobilni: React.FC = () => {


    useEffect(() => {
        AOS.init(
            {
                duration: 1000,
                once: true
            }
        );
    }, [])

    const data = [
        {
            id: 1,
            img: img1,
            title: 'iOS',
        },
        {
            id: 2,
            img: img2,
            title: 'Android',
        },
        {
            id: 3,
            img: img3,
            title: 'Crossplatform',
        }
    ]

    const data_two = [
        {
            id: 1,
            img: img4,
            title: 'Swift',
        },
        {
            id: 2,
            img: img5,
            title: 'Kotlin',
        },
        {
            id: 3,
            img: img6,
            title: 'flutter',
        }
    ]

    const cards_mobilni = data.map((el: data) => {
        return (
            <div className="card__mobilni" key={el.id}>
                <Image src={el.img} alt={el.title} />
                <h3>{el.title}</h3>
            </div>
        )
    })

    const cards_mobilni_two = data_two.map((el: data) => {
        return (
            <div className="card__mobilni_two" key={el.id}>
                <Image src={el.img} alt={el.title} />
                <h3>{el.title}</h3>
            </div>
        )
    })


    return (
        <>
            <section id='direction' className="mobilni">
                <div className="container" data-aos="fade-up">
                    <h1>Мобильная разработка</h1>
                    <div className="mobilni__wrapper_flex_element">
                        <div className='mobilni__wrapper_big'>
                            <p style={{ width: "500px" }}>В сотрудничестве со стартапами мы научились создавать творческий и функциональный пользовательский интерфейс для мобильных приложений.</p>
                            <div className="mobilni_wrapper">
                                {cards_mobilni}
                            </div>
                            <h2>Технологии</h2>
                            <div className="mobilni_wrapper_two">
                                {cards_mobilni_two}
                            </div>
                        </div>
                        <div className="imgs_wrapper_mobilni">
                            <Image src={img8} alt="img" className='img__mobilni_bg' />
                            <Image src={img7} alt="img" className='img__mobilni' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mobilni