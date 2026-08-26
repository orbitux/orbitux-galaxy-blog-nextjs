import { getAllPosts } from "@/lib/server/post"

const baseUrl = "https://orbitux.space"

const sitemap = () => {
    const posts = getAllPosts()

    const postUrls = posts.map(post => ({
        url: `${baseUrl}/blog/post/${post.slug}`,
        lastModified: post.updatedAt || post.date
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date()
        },
        ...postUrls
    ]
}
export default sitemap