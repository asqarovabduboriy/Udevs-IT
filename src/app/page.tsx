import Hero from '@/components/hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Uslugi from '@/components/uslugi/Uslugi'
import React from 'react'
import img1 from '../assets/images/navbarImg/erp.svg'
import img2 from '../assets/images/navbarImg/it.svg'
import img3 from '../assets/images/navbarImg/nastroyka.svg'
import img4 from '../assets/images/navbarImg/phone.svg'
import img5 from '../assets/images/navbarImg/ui.svg'
import img6 from '../assets/images/hero/people.svg'
import Team from '@/components/Team/Team'
import Mobilni from '@/components/Mobilni/Mobilni'
import Erp from '@/components/erp/Erp'
import Dizyn from '@/components/ui/Dizyn'
import Construktor from '@/components/construtor/Construktor'
import IT from '@/components/IT/IT'
import Skills from '@/components/skills/Skills'
import Client from '@/components/Client/Client'
import Portfolio from '@/components/portfolio/Portfolio'
import img7 from '../assets/images/por1.svg'
import img8 from '../assets/images/por2.svg'
import img9 from '../assets/images/por3.svg'
import Twoportfolio from '@/components/portfoliTwo/Twoportfolio'
import There from '@/components/there/There'
import Four from '@/components/Four/Four'
import Svyaz from '@/components/zvyaz/Svyaz'
import Aloqa from '@/components/Aloqa/Aloqa'
import Footer from '@/components/footer/Footer'




const Home: React.FC = () => {

  const data = [

    {
      id: 1,
      img: img6,
      title: "Выделенная команда",

    },
    {
      id: 2,
      img: img4,
      title: "Разработка мобильных приложений"
    },
    {
      id: 3,
      img: img1,
      title: "Разработка и внедрение ERP систем"
    },
    {
      id: 4,
      img: img5,
      title: "UI / UX дизайн"
    },
    {
      id: 5,
      img: img2,
      title: "IT консалтинг"
    },
    {
      id: 6,
      img: img3,
      title: "Оптимизация инфраструктуры"
    }
  ]

  const two_data = [
    {
      id: 1,
      title: "Website",
      img: img7
    },
    {
      id: 2,
      title: "Admin panel",
      img: img8
    }, {
      id: 3,
      title: "Crossplatform",
      img: img9
    },
    {
      id: 4,
      title: "Web design",
      img: img2
    },
    {
      id: 5,
      title: "Mobile design ",
      img: img4
    }
  ]




  return (
    <>
      <Navbar data={data} />
      <Hero />
      <Uslugi data={data} />
      <Team />
      <Mobilni />
      <Erp />
      <Dizyn />
      <Construktor />
      <IT />
      <Skills />
      <Client />
      <Portfolio data={two_data} />
      <Twoportfolio data={two_data} />
      <There data={two_data} />
      <Four />
      <Svyaz />
      <Aloqa />
      <Footer/>
    </>
  )
}

export default Home