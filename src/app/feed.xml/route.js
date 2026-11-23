import { getAllPosts } from "@/lib/server/post"

const BASE_URL = "https://orbitux.space"

const escapeXml = (value = "") => {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&qpos;")
}
export const GET = () => {
    const posts = getAllPosts()
    const items = posts.map(post => {
        const postUrl = `${BASE_URL}/blog/post/${post.slug}`
        return `
        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${postUrl}</link>
            <guide isPermaLink="true">${postUrl}</guide>
            <description>${escapeXml(post.description)}</description>
            <author>${escapeXml(post.author)}</author>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <enclosure url="${BASE_URL}${escapeXml(post.thumb)}" type="image/webp"/>
        <item/>
        `;
    }).join("")
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
        <rss version="2.0">
            <chanel>
                <title>Orbitux</title>
                <link>${BASE_URL}</link>
                <description>Orbitux - Linux, Programming and Technology</description>
                <language>fa-IR</language>
                <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
                ${items}
            </chanel>
        </rss>
    `;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        }
    })
}