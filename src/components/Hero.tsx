import { FaEnvelope } from "react-icons/fa"

function Hero() {
    return (
        <>
            <section className="max-w-4xl mx-auto">
                <article className="flex flex-col items-start">
                    <h2 className="text-xl font-medium">Hello,</h2>
                    <h1 className="text-2xl font-bold">My name is Nowfeel </h1>
                    <br />
                    <br />
                    <p className="text-lg">
                        I'm a Software Developer focused on <b>back-end development </b>with 3 years of experience. <br />What I enjoy the most about software development
                        is <b>solving real-world problems </b>and meeting evolving needs. <br />Currently in a contract position at Bliink, a french start-up in the digital advertising field.
                        <br />
                        I'm Based in Lille, France.
                    </p>
                </article>
                <div className="mt-4">
                    <a href="mailto:nowfeel.dev.pro@gmail.com" target='_blank' rel='noreferrer'
                        className="inline-flex items-center gap-3 px-4 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-500 transition-colors duration-200">
                        <FaEnvelope />
                        Contact me
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero
