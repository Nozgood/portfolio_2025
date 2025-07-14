import { Link } from "react-router-dom"
import { loadAllBlogPostsFrontMatter } from "../utils/markdownloader"
import { useEffect, useState } from "react"

export function Writing() {
    const [metadata, setMetadata] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchBlogPosts() {
            try {
                const postsMetadata = await loadAllBlogPostsFrontMatter()
                setMetadata(postsMetadata)
            } catch (error) { setError(error) } finally { setLoading(false) }
        }

        fetchBlogPosts()
    }, [])

    if (loading) return <div>loading ...</div>
    if (error) return <div>error </div>

    return <>
        <section id="Writing">
            <div className="max-w-4xl mx-auto" >
                <h2 className="text-4xl font-normal mb-12">Writing</h2>
                <div className="space-y-16">
                    {metadata.map((post, index) => (
                        <article key={index}>
                            <Link to={`/blog/${post.slug}`} >
                                <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-1">{post.date}</p>
                                {index < metadata.length - 1 &&
                                    <div className="border-t border-gray-100 mt-16"></div>
                                }
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section >
    </>
};
