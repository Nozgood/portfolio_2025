// TODO: use Markdown files instead of storing the content in a property of the object

export interface BlogPost {
    id: Number
    title: String
    // slug will be used to blog route path (SEO friendly) 
    slug: String
    date: Date
    desc: String
    content: string
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Test article blog",
        slug: "test-article-blog",
        date: new Date("2025-07-11"),
        desc: "Dont forget to be the person you wanna be, even if there are some constraints, deal with it and give your better each day. STEP BY STEP",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 2,
        title: "Another test article blog",
        slug: "another-test-article-blog",
        date: new Date("2025-07-12"),
        desc: "Your purpose is the best the best developer as you can, reach 100% of you journey progression",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

export function getBlogPost(slug: string | undefined): BlogPost | undefined {
    if (typeof (slug) == undefined) {
        return undefined
    }

    return blogPosts.find(post => post.slug == slug)
}

export function getPosts(limit: number = 3): BlogPost[] {
    var sorted = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    if (limit > blogPosts.length) {
        sorted = sorted.slice(0, limit)
    }

    return sorted
}
