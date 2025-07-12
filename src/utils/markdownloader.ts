import { marked } from "marked";
import fm from "front-matter"


// i have to statically add my blog post name to load it
const staticListOfBlogsPosts = ["test", "test2"]

/**
    * load the content of a markdown file and translate it into html    
*/
export async function loadMarkdownBlogPost(slug: string): Promise<String> {
    try {
        const mdFile = await import(`../content/blog/${slug}.md?raw`)
        const mdContent = mdFile.default

        return marked(mdContent)

    } catch (error) {
        console.error(`error loading post: ${slug}:`, error);
        return ""
    }
}

export async function loadAllBlogPostsFrontMatter() {
    const AllMdFrontMatter = await Promise.all(staticListOfBlogsPosts.map(async (slug) => {
        const frontMatter = await loadSingleBlogPostFrontMatter(slug)
        return frontMatter
    }))

    return AllMdFrontMatter
}

async function loadSingleBlogPostFrontMatter(slug: string) {
    try {
        const mdFile = await import(`../content/blog/${slug}.md?raw`)
        const mdContent = mdFile.default
        const { attributes } = fm(mdContent)
        return attributes
    } catch (error) {
        throw new Error(`failed to load post ${slug}: ${error}`)
    }
}
