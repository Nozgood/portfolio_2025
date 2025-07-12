import Header from "../components/Header";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import Work from "../components/Work";
import { Writing } from "../components/Writing";

function Home() {
    return <>
        <Header />
        <main className='max-w-screen-2xl mx-auto sm: p-8 md:p-16'>
            <Hero />
            <Separator />
            <Work />
            <Separator />
            <Writing />
        </main>
    </>
}

export default Home;
