"use client"
import React,{ useEffect } from 'react'
import Logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos'
import 'aos/dist/aos.css'
import hero from '../../assets/images/hero/hero.svg'

const Hero: React.FC = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, [])

  return (
    <>
      <section>
        <div className="container wrapper_hero" data-aos="fade-up">
          <div className="text_wrapper">
            <Image src={Logo} alt="Logo" width={267} height={89} />
            <h2>IT-Аутсорсинг Компания</h2>
            <div>
              <TypeAnimation
                sequence={[
                  "Разработка мобильных приложений",
                  1000,
                  "Разработка и внедрение ERP систем",
                  1000,
                  "UI / UX дизайн",
                  1000,
                  "Оптимизация инфраструктуры",
                  1000,
                  "IT консалтинг",
                  1000
                ]}
                speed={50}
                style={{ fontSize: '40px', fontWeight: "800", color: "#0077ff", lineHeight: "54px", width: "300px" }}
                repeat={Infinity}
              />
            </div>
            <button>Связаться</button>
          </div>
          <div className="image_wrapper">
            <Image src={hero} alt="Logo" width={"100"} height={"100"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero