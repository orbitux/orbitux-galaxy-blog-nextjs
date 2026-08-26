import { notFound } from "next/navigation";
import PostClient from "./PostClient";
import { getPostsBySlug } from "@/lib/server/post";
import PostContentRender from "@/components/PostContentRender";
import CodeCopyButtons from "@/components/MDX/Code/CodeCopyButtons";
const baseUrl = "https://orbitux.space"
export const generateMetadata = async ({ params }) => {
    const { slug } = await params
    const post = getPostsBySlug(slug)
    if (!post) {
        return {
            title: "Post Not Found!",
            description: "The requested post could not be found."
        }
    }
    const { frontMatter } = post
    return {
        title: frontMatter.title,
        description: frontMatter.description,
        alternates: {
            canonical: `${baseUrl}/blog/post/${frontMatter.slug}`
        },
        openGraph: {
            type: "article",
            title: frontMatter.title,
            description: frontMatter.description,
            url: `${baseUrl}/blog/post/${frontMatter.slug}`,
            siteName: "Orbitux",
            images: [
                {
                    url: "/orb3.png",
                    width: 1200,
                    height: 630,
                    alt: frontMatter.title
                }
            ]
        }
    }
}
export default async function PostPage({ params }) {
    const { slug } = await params
    const post = getPostsBySlug(slug)
    if (!post) {
        return notFound()
    }
    return (
        <div>
            <PostClient post={post} />
            <CodeCopyButtons />
        </div>
    )
}
