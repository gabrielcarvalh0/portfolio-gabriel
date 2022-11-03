/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import React, { useState } from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { Modal } from '../Modal'

const CardOne = () => {
  const [open, setOpen] = useState(false)

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')

  const date = new Date()
  const [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
  ]

  const arr = [
    {
      name: 'Gameplay',
      img:
        'https://res.cloudinary.com/dydwaeqqy/image/upload/v1667473698/icon_k6vzbk.png',
      desc:
        'Gameplay é um aplicativo para dispositivos Android e IOS com o foco de organizar suas jogatinas via Discord. No app é possivel, criar salas aonde você pode convidar seus amigos para jogar algum jogo, criar salas com horarios agendados e convidar amigos para seu servidor.',
    },
    {
      name: 'WG Engenharia',
      img:
        'https://res.cloudinary.com/dydwaeqqy/image/upload/v1667473958/icone-wg_ddhops.png',
      desc:
        'Esse projeto foi um site desenvolvido para empresa WG Engenharia, onde o foco é demosntrar seus serviços e converter clientes via WhatsAPP',
    },
    {
      name: 'SeuEditor',
      img:
        'https://res.cloudinary.com/dydwaeqqy/image/upload/v1667474026/WhatsApp_Image_2022-11-03_at_08.13.35_rifeev.jpg',
      desc:
        'Projeto desenvolvido com a parceria da ADETEC-Lins, incubadora de empresas. A SeuEditor é uma plataforma online que ajuda a conectar pessoas que possuem dificuldades em editar vídeos a editores freelancers. Com um sistema de buscas inteligente a plataforma consegue encontrar o melhor profissional de acordo com a complexidade de cada vídeo.',
    },
    {
      name: 'LinkEcommerce',
      img:
        'https://res.cloudinary.com/dydwaeqqy/image/upload/v1667474142/251150391_752735015611761_9015986913183503615_n_wvhmsq.jpg',
      desc:
        'Crie um cardápio online de sua empresa e disponibilize aos seus clientes para fazer pedidos online. A LinkEcommerce ajuda o empresário a organizar seus produtos, visualizar os acessos em sua loja e agilizar seus pedidos em uma maneira dinamica onde o cliente monta seu pedido online e encaminha via WhatsApp.',
    },
    {
      name: 'Loja do Campo',
      img:
        'https://res.cloudinary.com/dydwaeqqy/image/upload/v1667474205/logo-loja-campo_kygzfo.jpg',
      desc:
        'A Loja do Campo é um e-commerce desenvolvido com o foco para vendas online no ramo Pet e Agro.',
    },
    {
      name: 'EsculpeArt',
      img:
        'https://res.cloudinary.com/dydwaeqqy/image/upload/v1667474302/flavicon-art_angmlc.png',
      desc:
        'E-commerce para vendas de esculturas incríveis, nesse e-commerce foi desenvolvido toda a tecnologia de compra, processamento de pedidos e envio para os clientes.',
    },
  ]

  function handlerModal(name, desc, img) {
    setTitle(name)
    setDesc(desc)
    setImg(img)
    setOpen(true)
  }

  function handleCloseModal() {
    return setOpen(false)
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        title={title}
        desc={desc}
        img={img}
      />

      <section>
        <div>
          <h2>Aplicações desenvolvidas</h2>
          <p>
            Conheça sobre meu portfólio e criações desenvolvidas ao longo da
            minha carreira até agora {`${day}/${month}/${year}`}
          </p>

          <ul className="games-list">
            {arr.map((message) => {
              return (
                <li key={message.id}>
                  <button
                    onClick={(e) => {
                      handlerModal(message.name, message.desc, message.img)
                    }}
                  >
                    <img src={message.img} alt={message.name} />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

const CardTwo = () => {
  return (
    <>
      <section>
        <div>
          <h2>Minhas habilidades</h2>
          <br/>
          <p>
            Programador Full-Stack apaixonado pelas tecnologias e resolver
            problemas. <br/>
            <br/>
            <br/>
            Tenho como como principais habilidades soluções ágeis e criatividade para solucionar
            desafios e também facilidade em aprender algo novo. 
            <br/>
            <br/>
            Algumas tecnologias que mais ultilizo atualmente: <br/>

            - JavaScript, TypeScript e NodeJS  <br/>
            - React e React Native <br/>
            - HTML5, CSS, SASS, MaterialUI, Chakra UI, Ant Design e Styled Components <br/>
            - Express - GraphQL - Prisma, TypeORM e Sequelize<br/>
            - Git e Github - MongoDB - Firebase<br/>
          </p>
        </div>
      </section>
    </>
  )
}

const CardThree = () => {
  return (
    <>
      <section>
        <div>
          <h2>Minhas redes</h2>
          <p>Se conecte comigo agora mesmo!</p>

          <ul>
      

            <li>
              <a target="_blank" href="https://www.linkedin.com/in/gabriel-carvalho-3867001a5/">
              <FaLinkedin />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/gabrielcarva1h0/">
              <FaInstagram />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/gabrielcarvalh0">
              <FaGithub/>
              </a>
            </li>
           
          </ul>
        </div>
      </section>
    </>
  )
}

export { CardOne, CardTwo, CardThree }
