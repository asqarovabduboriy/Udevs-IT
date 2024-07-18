"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";

const Aloqa: React.FC = () => {
  return (
    <section id="contact" className='mobilni'>
    <div className="container">
        <h1>Свяжитесь с нами</h1>
        <Box component="form" className='form_contact' >
            <h3>Оставьте нам сообщение</h3>
            <div className="big_wrapper">
                <div className="wrapper_contact">
                    <TextField required margin='normal' name="name" id="name" label="ваше имя" variant="outlined" />
                    <TextField required margin='normal' name="email" id="email" label="ваша почта" variant="outlined" />
                    <TextField
                        required
                        fullWidth
                        name="message"
                        label="Ваше сообщение"
                        type="text"
                        id="message"
                        className='message'
                        sx={{ mt: 3, mb: 2 }}
                    />
                    <Button type="submit" size="large" variant="contained">Отправить</Button>
                </div>
                <div className="two_wrapper_contact">
                    <div className="icon_wrapper" style={{ marginTop: "20px" }}>
                        <MdOutlineLocationOn /><p>Ташкент, Юнусабадский район, проспект Амира Темура, 129Б</p>
                    </div>
                    <div className="icon_wrapper">
                        <IoCallOutline /><a href="tel:+998336600999">+998 33 66 00 999</a>
                    </div>
                    <div className="icon_wrapper">
                        <MdOutlineEmail /><a href="mailto:azizbek.b@udevs.io">azizbek.b@udevs.io</a>
                    </div>
                    <div className="icon_wrapper">
                        <FaTelegramPlane /><a href="https://t.me/azizbekbakhodirov" style={{ color: "#0077ff" }}>t.me/azizbekbakhodirov</a>
                    </div>
                    <div className="icon_wrapper" style={{ display: 'flex', gap: '10px' }}>
                        <FaYoutube />
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </Box>
    </div>
</section>
  )
}

export default Aloqa