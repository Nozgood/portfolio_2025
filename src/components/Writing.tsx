import { Link } from "react-router-dom"
import { getPosts } from "../data/blogPosts"

export function Writing() {
    const blogPosts = getPosts()
    console.log(blogPosts)
    return <>
        <section id="Writing">
            <div className="max-w-4xl mx-auto" >
                <h2 className="text-4xl font-normal mb-12">Writing</h2>
                <div className="space-y-16">
                    {blogPosts.map((post, index) => (
                        <article key={index}>
                            <Link to={`/blog/${post.slug}`} >
                                <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-1">{post.date.toDateString()}</p>
                                {index < blogPosts.length - 1 &&
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
