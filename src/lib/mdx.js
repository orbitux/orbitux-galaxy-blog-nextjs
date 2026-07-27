import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const options = {
    theme: 'tokyo-night',
    keepBackground: false,
    defaultLang: "plaintext",
    grid:true,
    tokenMap:{
        fn:"function"
    },
    onVisitLine(node) {
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: "" }]
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className = ["highlighted"]
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ["word"]
    }
}

export const mdxOptions = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, options]
    ]
}