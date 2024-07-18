"use client"
import React,{  useEffect} from 'react'
import Image from 'next/image'
import bg from '../../assets/images/sms_png.png'
import Sms from '../../assets/images/Sms_png.svg'
import icon from '../../assets/images/sms_iocn.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

interface data {
    id: number
    img: string
    title: string
}

interface props {
    data: data[]
}

const Twoportfolio: React.FC<props> = ({data}) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, [])

const cards = data?.slice(0, 3).map((item: data) => (
     <div className="portfolio_card" key={item.id}>
         <Image src={item.img} alt="img" width={56} height={56} />
         <p>{item.title}</p>
     </div>
))


    return (
        <>
            <section className='portfolio' id='Sms'>
                <div className="container" data-aos="fade-up">
                    <div className="big_wrapper_portfolio">
                        <div className='text_wrapper_portfolio'>
                            <Image src={Sms} alt="delver" width={252} height={49} className='delver' />
                            <div className="icons_wrapper " style={{background: "rgba(68, 115, 229, 0.2)", color:"#4473E5",width:"142px"}}>
                                <Image src={icon} alt="icon" width={25} height={25} />
                                <span>Notification</span>
                            </div>
                            <p>Smsuz.uz - It is a platform for bulk SMS messaging.</p>
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

export default Twoportfolio