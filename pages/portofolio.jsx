import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Portofolio() {
    return (
        <>
            <Head>
                <title>Portofolio</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Portofolio</h1>
                        <p className="description">
                        Saya adalah Junior Front End Engineer yang memiliki keinginan belajar yang tinggi, dan mempunyai keinginan untuk mempelajari hal - hal baru.
                        </p>

                        <div className="portfolio-wrapper">
                            <div className="portfolio-item">
                                <img src="/bestrong.png" alt="" className="portfolio-image"/>

                                <h4 className="portfolio-name">#BeStrong</h4>
                                <div className="portfolio-category">Web Development</div>
                            </div>
                            <div className="portfolio-item">
                                <img src="/milsapp.png" alt="" className="portfolio-image"/>

                                <h4 className="portfolio-name">MILS`APP</h4>
                                <div className="portfolio-category">Web Development</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        </>
    )
}