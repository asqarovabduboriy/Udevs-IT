import React from 'react'
import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer' >
            <div className="container">
                <div className='logo_footer'>
                    <Image src={logo} alt="logo" width={100} height={100} />
                </div>
                <div className="big_wrapper_footer">
                    <div className="one_wrapper_footer">
                        <h3>Про нас</h3>
                        <a href="#uslugi">Услуги</a>
                        <a href="#team">     Команда</a>
                        <a href="#tools">    Инструменты</a>
                        <a href="#clients">Клиенты</a>
                    </div>

                    <div className="one_wrapper_footer">
                        <h3>Услуги</h3>
                        <a href="#direction">Разработка мобильных приложений</a>
                        <a href="#erp">Разработка и внедрение ERP систем</a>
                        <a href="#dizyn">UI / UX дизайн</a>
                        <a href="#it">IT консалтинг</a>
                        <a href="#construktor">Оптимизация инфраструктуры</a>
                    </div>


                    <div className="one_wrapper_footer">
                        <h3>Портфолио</h3>
                        <a href="#Delever">Delever</a>
                        <a href="#Sms">Sms.uz</a>
                        <a href="#Goodzone">Goodzone</a>
                        <a href="#Iman">Iman</a>
                    </div>
                </div>

                <div className="line_div"></div>

                <div className="two_wrapper">
                    <p>© 2024 Udevs. All rights reserved</p>

                    <div className="icon_wrapper">
                        <div className='icon_footer'>
                            <FaInstagram />
                        </div>
                        <div className='icon_footer'>
                            <FaTwitter />
                        </div>
                        <div className='icon_footer'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer