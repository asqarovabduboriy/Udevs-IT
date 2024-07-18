"use client"
import React, { useEffect } from 'react'
import teeam from '../../assets/images/team.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { once } from 'events'

const Team: React.FC = () => {

    useEffect(() => {
        AOS.init(
            {
                duration: 1000,
                once: true

            }
        );
    }, [])

    return (
        <>
            <section id='team' className='team'>
                <div data-aos="fade-up" className="container">
                    <h1 data-aos="zoom-in">Выделенная команда</h1>
                    <div className="wrapper_team_container">
                        <div className='team_container'>
                            <p>Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps, QA-инженер, бэкенд и фронтенд разработчики</p>
                            <span>100+</span>
                            <b>Сотрудников</b>
                        </div>
                        <Image src={teeam} alt="team" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team