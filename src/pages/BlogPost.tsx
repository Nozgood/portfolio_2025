import { Link, useParams } from "react-router-dom"
import Separator from "../components/Separator"
import { ArrowRight } from 'lucide-react'
import { loadMarkdownBlogPost, loadSingleBlogPostFrontMatter } from "../utils/markdownloader"
import { useEffect, useState } from "react"

export default function BlogPost() {
    const queryParams = useParams<{ slug: string }>()

    const [post, setPost] = useState(null)
    const [metadata, setMetadata] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        async function fetchBlogPost() {
            try {
                const post = await loadMarkdownBlogPost(queryParams.slug)
                const metadata = await loadSingleBlogPostFrontMatter(queryParams.slug)
                setPost(post)
                setMetadata(metadata)
            } catch (error) { setError(error) } finally { setLoading(false) }
        }

        fetchBlogPost()
    }, [])

    if (loading) return <><div>loading ...</div></>
    if (error) return <><div>error ...</div></>

    return <>
        <header className="max-w-screen-2xl mx-auto sm: p-8">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-12 text-center">{metadata.title}</h1>
                <p className="text-center text-gray-700">
                    {metadata.desc}
                </p>
            </div>
        </header>
        <Separator padding="p-8" />
        <main className="max-w-screen-2xl mx-auto p-8">
            <section className="mb-16">
                <div className="flex items-center gap-2">
                    <Link to={"/"} ><p className="underline">Home</p></Link>
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                    <Link to={"/#Writing"} ><p className="underline">Writing</p></Link >
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                    <p className="text-gray-600 truncate">{metadata.title}</p>
                </div>
            </section>
            <section>
                <article dangerouslySetInnerHTML={{ __html: post }} className="prose" ></article>
            </section>
        </main >
    </>
}
