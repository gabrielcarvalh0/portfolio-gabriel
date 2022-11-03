import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { CardOne, CardTwo } from 'components/Cards'
import { CardThree } from '../src/components/Cards'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio Gabriel Alves</title>
        <meta name="description" content="Confira alguns projetos desenvolvidos" />
        <link rel="icon" href="https://res.cloudinary.com/dydwaeqqy/image/upload/v1667477032/308020321_1299798970788124_5083845435344164170_n_yscl2t.jpg" />
      </Head>
      <Header />

      <main className={styles.main}>
        <CardOne />
        <CardTwo />
        <CardThree />
      </main>

      <Footer />
    </div>
  )
}
