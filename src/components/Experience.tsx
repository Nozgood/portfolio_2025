import { ArrowRight } from "lucide-react";

interface Experience {
    company: string;
    position: string;
    period: string;
}

function Experience() {
    const experiences: Experience[] = [
        {
            company: "Bliink",
            position: "Back End Developer",
            period: "December 2022 - today"
        },
        {
            company: "Freelance",
            position: "Front End Developer",
            period: "July 2022 - December 2022",
        },
        {
            company: "Cerise Media",
            position: "Front End Developer",
            period: "November 2021 - April 2022",
        }
    ]

    return <>
        <section className="max-w-4xl mx-auto md:flex justify-between">
            <div className="">
                <h2 className="border-t-2 pt-4 text-4xl font-normal mb-12">Experience</h2>
            </div>
            <div>
                {experiences.map((item, index) => (
                    <article key={index}>
                        <div className="mb-8">
                            <h4 className="text-2xl font-medium">
                                {item.company}
                            </h4>
                            <p className="text-2xl font-normal">
                                {item.position}
                            </p>
                        </div>
                        <div>
                            {item.period}
                        </div>
                        {index < experiences.length - 1 && (
                            <div className="border-t border-gray-100 m-8"></div>
                        )}
                    </article>
                ))}
                <div className="mt-4">
                    <a
                        href="/SAFI_Nowfeel_Backend_Developer.pdf"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-500 transition-colors duration-200"
                        download
                    >
                        See full CV <ArrowRight className="inline w-4 h-4" />
                    </a>
                </div>

            </div>
        </section >
    </>
}

export default Experience;
