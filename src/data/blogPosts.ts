// TODO: use Markdown files instead of storing the content in a property of the object

export interface BlogPost {
    id: Number
    title: String
    // slug will be used to blog route path (SEO friendly) 
    slug: String
    date: Date
    content: string
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "test article blog",
        slug: "test-article-blog",
        date: new Date("2025-07-11"),
        content: `
        <h2>Test article blog </h2>
        <p>hello this is a test blog i am testing that everything is correcly displayed</p>
        `
    }
]

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug == slug)
}

export function getPosts(limit: number = 3): BlogPost[] {
    var sorted = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    if (limit > blogPosts.length) {
        sorted = sorted.slice(0, limit)
    }

    return sorted
}
