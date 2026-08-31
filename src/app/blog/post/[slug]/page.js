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
    const image = frontMatter.thumb || "/orb3.png"
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
                    url: image,
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
    const { frontMatter } = post
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        headline: frontMatter.title,
        description: frontMatter.description,

        image: [`${baseUrl}${frontMatter.thumb}`],
        author: {
            "@type": "Person",
            name: frontMatter.author,
        },
        publisher: {
            "@type": "Person",
            name: "Orbitux",
            url: baseUrl
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/post/${frontMatter.slug}`
        }
    }
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd)
            }} />
            <PostClient post={post} />
            <CodeCopyButtons />
        </div>
    )
}
