import { Link, useParams } from "react-router-dom"
import { getBlogPost, type BlogPost } from "../data/blogPosts"
import Separator from "../components/Separator"
import { ArrowRight } from 'lucide-react'

export default function BlogPost() {
    const queryParams = useParams<{ slug: string }>()
    console.log("slug from query", queryParams)

    const post: BlogPost | undefined = queryParams ? getBlogPost(queryParams.slug) : undefined

    if (!post) {
        return <>
            <div>404 not found</div>
        </>
    }

    return <>
        <header className="max-w-screen-2xl mx-auto sm: p-8">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-12 text-center">{post.title}</h1>
                <p className="text-center text-gray-700">
                    {post.desc}
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
                    <p className="text-gray-600 truncate">{post.title}</p>
                </div>
            </section>
            <section>
                {post.content}
            </section>
        </main >
    </>
}
