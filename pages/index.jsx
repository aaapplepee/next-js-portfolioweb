import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar/>
      
      <section className="hero"> 
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, saya Akmal Widad Iskandar</h1>
            <p className="description">
            Saya adalah Front End Engineer yang memiliki pengalaman membangun web dengan framework Bootstrap, Vuejs dan Reactjs.
            </p>

            <Link href="/contact"><a className="cta">Contact</a></Link>
            </div>

            <div className="image-wrapper">
              <img src="/animated.png" alt="logo"/>
            </div>
        </div>
      </section>
    </>
  )
}
