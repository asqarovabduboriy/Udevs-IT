import React from 'react'
import Image from 'next/image'
import akfa from '../../assets/images/client/akfa.svg'
import csape from '../../assets/images/client/cspace.svg'
import delver from '../../assets/images/client/Delver.svg'
import fonon from '../../assets/images/client/Fonon.svg'
import bank from '../../assets/images/client/Hamkorbank.svg'
import iman from '../../assets/images/client/iman.svg'
import hoshimov from '../../assets/images/client/hoshimov.svg'

import maxtrack from '../../assets/images/client/maxtrack.svg'
import shef from '../../assets/images/client/shef.svg'
import my_taxt from '../../assets/images/client/My taxi.svg'
import workley from '../../assets/images/client/workly.svg'
import z from '../../assets/images/client/z.svg'
import good from '../../assets/images/client/goodone.svg'
import sms_uz from '../../assets/images/client/sms.svg'



const Client: React.FC = () => {
    return (
        <section className='clients-section' id='clients'>
            <div className="container">

                <h1>Наши клиенты</h1>

            </div>


            <div className="animate">

                <div className="anim__wrapper">

                    <div className="anim__item">
                        <Image alt='Akfa' src={akfa} width={213} height={126} className='anim__img' />
                    </div>
                    <div className="anim__item">
                        <Image alt='Space' src={csape} width={213} height={126} className='anim__img' />
                    </div>
                    <div className="anim__item">
                        <Image alt='Delever' src={delver} width={213} height={126} className='anim__img' />
                    </div>
                    <div className="anim__item">
                        <Image alt='Fonon' src={fonon} width={213} height={126} className='anim__img' />
                    </div>
                    <div className="anim__item">
                        <Image alt='Hamkorbank' src={bank} width={213} height={126} className='anim__img' />
                    </div>
                    <div className="anim__item">
                        <Image alt='Hoshimov' src={hoshimov} width={213} height={126} className='anim__img' />
                    </div>


                </div>


            </div>

            <div className="animate animate2">

                     <div className="anim__wrapper">

                        <div className="anim__item">
                             <Image alt='maxtrack' src={maxtrack} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                             <Image alt='shef' src={shef} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                              <Image alt='my_taxi' src={my_taxt} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                               <Image alt='workley' src={workley} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                                <Image alt='z' src={z} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                                <Image alt='goodzone' src={good} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                                <Image alt='smsuz' src={sms_uz} width={213} height={126} className='anim__img'/>
                        </div>
                        

                     </div>

            </div>

        </section>
    )
}

export default Client