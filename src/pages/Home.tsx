import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import Work from "../components/Work";
import Writing from "../components/Writing";
import { useLocation } from "react-router-dom";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Footer from "../components/Footer";

function Home() {
    const location = useLocation()

    console.log("location", location)

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const elementID = location.hash.substring(1)
                const element = document.getElementById(elementID)
                element.scrollIntoView({ behavior: 'smooth' })
            }, 300)
        }
    }, [location])

    return <>
        <Header />
        <main className='max-w-screen-2xl mx-auto sm: p-8 md:p-16'>
            <Hero />
            <Separator />
            <Work />
            <Separator />
            <Writing />
            <Separator />
            <Experience />
            <Separator />
            <Skills />
            <Separator />
            <Interests />
        </main>
        <Footer />
    </>
}

export default Home;
