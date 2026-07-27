import { MDXRemote } from "next-mdx-remote/rsc"
import Prose from "./Prose"
import { mdxOptions } from "@/lib/mdx";
import CodeBlock from "./MDX/CodeBlock";
import Callout from "./MDX/Callout";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Heading from '@/components/MDX/Heading'
export default function PostContentRender({ content, post }) {
    const component = {
        pre: CodeBlock,
        Callout,
        h1: (props) => <Heading as='h1' {...props} />,
        h2: (props) => <Heading as='h2' {...props} />,
        h3: (props) => <Heading as='h3' {...props} />,
        h4: (props) => <Heading as='h4' {...props} />,
        h5: (props) => <Heading as='h5' {...props} />,
        h6: (props) => <Heading as='h6' {...props} />
    }

    return (
        <Prose>
            <span>نویسنده : {post.frontMatter.author}</span>
            <h1 className="text-xl md:text-3xl font-bold mb-2">{post.frontMatter.title}</h1>
            <img id="content" src={post.frontMatter.thumb} loading="lazy" alt={post.frontMatter.title} className="rounded-xl mb-4 object-contain mt-5 mx-auto" width={800} height={400} />
            <MDXRemote source={content} components={component} options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug]
                }
            }} />
        </Prose>
    )
}