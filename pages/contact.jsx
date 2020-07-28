import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <Navbar/>

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Contact</h1>
                        <p className="description">
                        Saya adalah Junior Front End Engineer yang memiliki keinginan belajar yang tinggi, dan mempunyai keinginan untuk mempelajari hal - hal baru, mampu beradaptasi dengan cepat dan mampu bekerja bersama tim, serta mempunyai pengalaman membangun web dengan framework Bootstrap, Vuejs dan Reactjs.
                        </p>
                        <ul className="contact-links">
                            <li className="contact-item">Email: widad.akmal83@gmail.com</li>
                            <li className="contact-item">Phone: +6289520907720</li>
                            <li className="contact-item">Instagram: @aaapplepee</li>
                        </ul>
                    </div>
                </div>
            </section>   
        </>
    )
}
