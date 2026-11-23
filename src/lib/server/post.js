import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { extractHeadings } from './headings'
const POSTS_PATH = path.join(process.cwd(), "src/content")

export function getAllPosts() {
    const files = fs.readdirSync(POSTS_PATH)
    return files.filter(file => file.endsWith(".mdx")).map(file => {
        const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf-8")
        const { data } = matter(source)
        return {
            ...data
        }
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostsBySlug(slug) {
    const files = fs.readdirSync(POSTS_PATH)
    for (const file of files) {
        const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf-8")
        const { data, content } = matter(source)
        if (data.slug === slug) {
            return { frontMatter: data, content, headings: extractHeadings(content) }
        }
    }
    return null
}