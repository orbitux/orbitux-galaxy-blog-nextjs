import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const mdxOptions = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
        rehypeSlug,
        [
            rehypeAutolinkHeadings,
            {
                behavior: "append"
            }
        ],
        [
            rehypePrettyCode,
            {
                theme: "github-dark-default",
                keepBackground: false
            }
        ]
    ]
}