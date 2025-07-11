import type { BlogPost } from "../data/blogPosts";

export default function BlogCard(blogPost: BlogPost) {
    return <>
        <article className="group">
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
                                {blogPost.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </article>

    </>
};
