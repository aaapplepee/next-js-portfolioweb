import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Profile</h1>
                        <p className="description">
                        Saya adalah Junior Front End Engineer yang memiliki keinginan belajar yang tinggi, dan mempunyai keinginan untuk mempelajari hal - hal baru, mampu beradaptasi dengan cepat dan mampu bekerja bersama tim, serta mempunyai pengalaman membangun web dengan framework Bootstrap, Vuejs dan Reactjs.
                        </p>
                    </div>
                </div>
            </section>    
        </>
    )
}