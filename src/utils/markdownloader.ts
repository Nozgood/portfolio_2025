import { marked } from "marked";
import fm from "front-matter"


// i have to statically add my blog post name to load it
const staticListOfBlogsPosts = ["test_markdown", "test_markdown_2"]

/**
    * load the content of a markdown file and translate it into html    
*/
export async function loadMarkdownBlogPost(slug: string) {
    try {
        const mdFile = await import(`../content/blog/${slug}.md?raw`)
        var mdContent = mdFile.default
        mdContent = mdContent.replace(/^---\s*\n.*?\n---\s*\n/s, '')
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

export async function loadSingleBlogPostFrontMatter(slug: string) {
    try {
        const mdFile = await import(`../content/blog/${slug}.md?raw`)
        const mdContent = mdFile.default
        const { attributes } = fm(mdContent)
        return attributes
    } catch (error) {
        throw new Error(`failed to load post ${slug}: ${error}`)
    }
}
