"use client"

import React, { useState } from 'react'
import Image from 'next/image'


import Promotheus from '../../assets/images/skills2/Promotheus.svg'
import Loki from '../../assets/images/skills2/Loki.svg'
import Bitbucket from '../../assets/images/skills2/Bitbucket.svg'
import Gitlab from '../../assets/images/skills2/Gitlab.svg'
import Kotlin from '../../assets/images/skills2/Kotlin2.svg'
import Android from '../../assets/images/skills2/Android2.svg'
import Java from '../../assets/images/skills2/Java.svg'
import Azure from '../../assets/images/skills2/Azure.svg'
import GCP from '../../assets/images/skills2/GCP.svg'
import DigitalOcean from '../../assets/images/skills2/DigitalOcean.svg'
import AWS from '../../assets/images/skills2/AWS.svg'
import Kubernetes from '../../assets/images/skills2/Kubernetes.svg'
import ELK from '../../assets/images/skills2/ELK.svg'
import Grafana from '../../assets/images/skills2/Grafana.svg'
import Terraform from '../../assets/images/skills2/Terraform.svg'
import IOS from '../../assets/images/skills2/IOS2.svg'
import Swift from '../../assets/images/skills2/Swift2.svg'
import Flutter from '../../assets/images/skills2/Flutter2.svg'
import Next_JS from '../../assets/images/skills2/NextJS.svg'
import React_JS from '../../assets/images/skills2/ReactJS.svg'
import Javascript from '../../assets/images/skills2/Javascript.svg'
import Balsamic from '../../assets/images/skills2/Balsamic.svg'
import Invision from '../../assets/images/skills2/Invision.svg'
import Figma from '../../assets/images/skills2/Figma2.svg'
import Docker from '../../assets/images/skills2/Docker.svg'
import PostgreSQL from '../../assets/images/skills2/PostgreSQL.svg'
import Python from '../../assets/images/skills2/Python.svg'
import Node_JS from '../../assets/images/skills2/Nodejs.svg'
import PHP from '../../assets/images/skills2/PHP.svg'
import GO from '../../assets/images/skills2/GO.svg'
import Ant_Design from '../../assets/images/skills2/AntDesign.svg'
import Gatsby_JS from '../../assets/images/skills2/GatsbyJS.png'
import Vue_JS from '../../assets/images/skills2/VueJS.svg'
import Principle from '../../assets/images/skills2/Principle.svg'
import Adobe_suite from '../../assets/images/skills2/Adobesuite.svg'
import Sketch from '../../assets/images/skills2/Sketch2.svg'
import YouTrack from '../../assets/images/skills2/YouTrack.svg'
import Appium from '../../assets/images/skills2/Appium.svg'
import Cypress from '../../assets/images/skills2/Cypress.svg'
import Jmeter from '../../assets/images/skills2/Jmeter.svg'
import MongoDB from '../../assets/images/skills2/MongoDB.svg'
import Cassandra from '../../assets/images/skills2/Cassandra.svg'
import Sass from '../../assets/images/skills2/Sass.svg'
import Material_UI from '../../assets/images/skills2/MaterialUI.svg'
import Zeplin from '../../assets/images/skills2/Zeplin.svg'
import Illustrator from '../../assets/images/skills2/Illustrator2.svg'
import Photoshop from '../../assets/images/skills2/Photoshop.svg'
import Lottie from '../../assets/images/skills2/Lottie2.svg'





interface Data {
    id: number,
    img: string,
    text: string,
    category: string
}

const Skills: React.FC = () => {

    const [value, setValue] = useState<string>("")


    const data = [
        {
            id: 1,
            title: "Promotheus",
            img: Promotheus,
            category: "Devops"
        },
        {
            id: 2,
            title: "Loki",
            img: Loki,
            category: "Devops"
        },
        {
            id: 3,
            title: "Bitbucket",
            img: Bitbucket,
            category: "Devops"
        },
        {
            id: 4,
            title: "Gitlab",
            img: Gitlab,
            category: "Devops"
        },
        {
            id: 5,
            title: "Kotlin",
            img: Kotlin,
            category: "Mobile"
        },
        {
            id: 6,
            title: "Android",
            img: Android,
            category: "Mobile"
        },
        {
            id: 7,
            title: "Java",
            img: Java,
            category: "Mobile"
        },
        {
            id: 8,
            title: "Azure",
            img: Azure,
            category: "Infrastructure"
        },
        {
            id: 9,
            title: "GCP",
            img: GCP,
            category: "Infrastructure"
        },
        {
            id: 10,
            title: "DigitalOcean",
            img: DigitalOcean,
            category: "Infrastructure"
        },
        {
            id: 11,
            title: "AWS",
            img: AWS,
            category: "Infrastructure"
        },
        {
            id: 12,
            title: "Kubernetes",
            img: Kubernetes,
            category: "Infrastructure"
        },
        {
            id: 13,
            title: "ELK",
            img: ELK,
            category: "Devops"
        },
        {
            id: 14,
            title: "Grafana",
            img: Grafana,
            category: "Devops"
        },
        {
            id: 15,
            title: "Terraform",
            img: Terraform,
            category: "Devops"
        },
        {
            id: 16,
            title: "IOS",
            img: IOS,
            category: "Mobile"
        },
        {
            id: 17,
            title: "Swift",
            img: Swift,
            category: "Mobile"
        },
        {
            id: 18,
            title: "Flutter",
            img: Flutter,
            category: "Mobile"
        },
        {
            id: 19,
            title: "Next.JS",
            img: Next_JS,
            category: "Frontend"
        },
        {
            id: 20,
            title: "React.JS",
            img: React_JS,
            category: "Frontend"
        },
        {
            id: 21,
            title: "Javascript",
            img: Javascript,
            category: "Frontend"
        },
        {
            id: 22,
            title: "Balsamic",
            img: Balsamic,
            category: "UX/UI"
        },
        {
            id: 23,
            title: "Invision",
            img: Invision,
            category: "UX/UI"
        },
        {
            id: 24,
            title: "Figma",
            img: Figma,
            category: "UX/UI"
        },
        {
            id: 25,
            title: "Docker",
            img: Docker,
            category: "Devops"
        },
        {
            id: 26,
            title: "PostgreSQL",
            img: PostgreSQL,
            category: "Backend"
        },
        {
            id: 27,
            title: "Python",
            img: Python,
            category: "Backend"
        },
        {
            id: 28,
            title: "Node.JS",
            img: Node_JS,
            category: "Backend"
        },
        {
            id: 29,
            title: "PHP",
            img: PHP,
            category: "Backend"
        },
        {
            id: 30,
            title: "GO",
            img: GO,
            category: "Backend"
        },
        {
            id: 31,
            title: "Ant Design",
            img: Ant_Design,
            category: "Frontend"
        },
        {
            id: 32,
            title: "Gatsby.JS",
            img: Gatsby_JS,
            category: "Frontend"
        },
        {
            id: 33,
            title: "Vue.JS",
            img: Vue_JS,
            category: "Frontend"
        },
        {
            id: 34,
            title: "Principle",
            img: Principle,
            category: "UX/UI"
        },
        {
            id: 35,
            title: "Sketch",
            img: Sketch,
            category: "UX/UI"
        },
        {
            id: 36,
            title: "Adobe suite",
            img: Adobe_suite,
            category: "UX/UI"
        },
        {
            id: 37,
            title: "YouTrack",
            img: YouTrack,
            category: "Testing"
        },
        {
            id: 38,
            title: "Appium",
            img: Appium,
            category: "Testing"
        },
        {
            id: 39,
            title: "Cypress",
            img: Cypress,
            category: "Testing"
        },
        {
            id: 40,
            title: "Jmeter",
            img: Jmeter,
            category: "Testing"
        },
        {
            id: 41,
            title: "MongoDB",
            img: MongoDB,
            category: "Backend"
        },
        {
            id: 42,
            title: "Cassandra",
            img: Cassandra,
            category: "Backend"
        },
        {
            id: 43,
            title: "Sass",
            img: Sass,
            category: "Frontend"
        },
        {
            id: 44,
            title: "Material UI",
            img: Material_UI,
            category: "Frontend"
        },
        {
            id: 45,
            title: "Zeplin",
            img: Zeplin,
            category: "UX/UI"
        },
        {
            id: 46,
            title: "Illustrator",
            img: Illustrator,
            category: "UX/UI"
        },
        {
            id: 47,
            title: "Lottie",
            img: Lottie,
            category: "UX/UI"
        },
        {
            id: 48,
            title: "Photoshop",
            img: Photoshop,
            category: "UX/UI"
        },

    ]

    const card = data?.map((item: Data) => (
        <div
            className={`skills__card ${item.category.split("/").join("")} ${value.trim() ? value !== item.category ? "none_active" : "" : ""}`}
            key={item.id}>
            <Image src={item.img} alt={item.title} width={24} height={24} />
            <span>{item.title}</span>
        </div>

    ))



    const handlechange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <section className='skills construktor' id='tools'>
                <div className="container">
                    <h1>Инструменты</h1>
                    <div className="inputs_big_wrapper">
                        <div className="inputs_wrapper">
                            <input type="radio" name='tools' value={"Frontend"} checked={value === "Frontend"} onChange={handlechange} />
                            <span>Frontend
                            </span>
                        </div>
                        <div className="inputs_wrapper">
                            <input type="radio" name='tools' value={"Backend"} checked={value === "Backend"} onChange={handlechange} />
                            <span>Backend
                            </span>
                        </div>
                        <div className="inputs_wrapper">
                            <input type="radio" name='tools' value={"Devops"} checked={value === "Devops"} onChange={handlechange} />
                            <span>Devops
                            </span>
                        </div>
                        <div className="inputs_wrapper">
                            <input type="radio" name='tools' value={"Testing"} checked={value === "Testing"} onChange={handlechange} />
                            <span>Testing
                            </span>
                        </div>
                        <div className="inputs_wrapper">
                            <input type="radio" name='tools' value={"UX/UI"} checked={value === "UX/UI"} onChange={handlechange} />
                            <span>UX/UI
                            </span>
                        </div>
                        <div className="inputs_wrapper">
                            <input type="radio" name='tools' value={"Infrastructure"} checked={value === "Infrastructure"} onChange={handlechange} />
                            <span>Infrastructure
                            </span>
                        </div>
                        <div className="inputs_wrapper">
                            <input type="radio" name='tools' value={"Mobile"} checked={value === "Mobile"} onChange={handlechange} />
                            <span>Mobile</span>
                        </div>
                    </div>

                    <div className="skkils_wrapper">
                        {card}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills