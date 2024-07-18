"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/images/logo.svg'
import Modal from '../modal/Modal'

import rus from '../../assets/images/navbarImg/rus.svg'
import eng from '../../assets/images/navbarImg/eng.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface NavbarProps {
    data: any
}

const Navbar: React.FC<NavbarProps> = ({data}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openModalTwo, setOpenModalTwo] = useState<boolean>(false)


   
    const dats = data?.slice(1,6).map((item: { id: number; img: string; title: string }) => {
        return (
            <div className="wrapper_modal_data" key={item.id}>
                <div className='data_one_img'>
                    <Image src={item.img} alt="img" width={30} height={30} />
                </div>
                <p>{item.title}</p>
            </div>
        )
    })




    return (
        <>
            <header>
                <div className="container navbar">
                    <div className="logo">
                        <Link href="/">
                            <Image src={logo} alt="logo" width={96} height={32} />
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link href="#uslugi">Услуги</Link></li>
                            <li><Link href="#team">Команда</Link></li>
                            <li onMouseEnter={() => setOpen(!open)}><Link href="#direction">Напрaвление</Link></li>
                            <li><Link href="#tools">Инструменты</Link></li>
                            <li><Link href="#clients">Клиенты</Link></li>
                            <li onMouseEnter={() => setOpenModal(!openModal)} ><Link href="#portfolio">Портфолио</Link></li>
                            <li onMouseEnter={() => setOpenModalTwo(!openModalTwo)} ><Link href="#language">Язык</Link></li>
                            <button>Связаться</button>
                        </ul>
                    </nav>
                </div>
            </header>

            {open ? <Modal>
                <div className="wrapper_one_modal">
                    <p>Напрaвление</p>

                    <div className="dats_wrapper">
                        {dats}
                    </div>
                </div>
            </Modal> : <></>}

            {
                openModal ? <Modal>
                    <div className="wrapper_one_modal_two">
                        <p>Портфолио</p>
                        <div className="brand_wrapper">
                            <div className="brand_one">
                                <div className="div_rektangle">
                                    <span style={{ color: "", fontWeight: "bold" }}>D</span>
                                </div>
                                <p>Delver</p>
                            </div>
                            <div className="brand_one">
                                <div className="div_rektangle" style={{ backgroundColor: "#F5F5F5" }}>
                                    <span style={{ color: "#0077ff" }} >S</span>
                                </div>
                                <p>Sms.uz</p>
                            </div>
                            <div className="brand_one">
                                <div className="div_rektangle" style={{ backgroundColor: "rgba(172, 82, 82,0.2)" }}>
                                    <span style={{ color: "red", fontWeight: "bold" }} >G</span>
                                </div>
                                <p>Gudzone</p>
                            </div>
                            <div className="brand_one">
                                <div className="div_rektangle" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)" }}>
                                    <span style={{ color: "lightgreen", fontWeight: "bold" }} >I</span>
                                </div>
                                <p>Iman</p>
                            </div>
                        </div>
                    </div>
                </Modal> : <></>
            }

            {
                openModalTwo ? <Modal>
                    <div className="wrapper_one_modal_two" style={{width:"150px",marginLeft:"150px"}}>
                        <div className='language'>
                            <Image src={rus} alt="img" width={30} height={30} />
                            <p>Рус</p>
                        </div>
                        <div className='language'>
                            <Image src={eng} alt="img" width={30} height={30} />
                            <p>Eng</p>
                        </div>
                    </div>

                </Modal> : <></>
            }

        </>
    )
}

export default Navbar