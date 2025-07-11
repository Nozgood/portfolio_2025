import Header from "../components/Header";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import Work from "../components/Work";
import { getBlogPost, getPosts } from "../data/blogPosts";

function Home() {
    const blogPosts = getPosts()
    return <>
        <Header />
        <main className='max-w-screen-2xl mx-auto sm: p-8 md:p-16'>
            <Hero />
            <Separator />
            <Work />
            <Separator />
        </main>
    </>
}

export default Home;
