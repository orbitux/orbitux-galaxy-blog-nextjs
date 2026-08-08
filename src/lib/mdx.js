import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { h } from "hastscript"
import remarkCodeGroup from "@/components/MDX/Code/remarkCodeGroup";
import remarkDirective from "remark-directive";
const options = {
    theme: 'night-owl',
    keepBackground: false,
    defaultLang: "plaintext",
    grid: true,
    tokensMap: {
        fn: "function"
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
const rehypeCodeMeta = () => {
    return (tree) => {
        visit(tree, "element", (node) => {
            if (node.tagName !== "pre") return
            const code = node.children?.[0]
            if (!code?.properties?.metastring) return
            node.properties.metastring = code.properties.metastring
        })
    }
}
const rehypeCodeHeader = () => {
    return (tree) => {
        visit(tree, "element", (node) => {
            if (node.tagName !== "figure") return
            const pre = node.children.find(child => child.tagName === "pre")
            if (!pre) return
            const language = pre.properties?.["data-language"] || "text"
            let caption = node.children.find(child => child.tagName === "figcaption")
            if (!caption) {
                caption = h("figcaption", {
                    "data-language": language
                })
                node.children.unshift(caption)
            }
            const title = caption.children
            caption.children = [
                h(
                    "div",
                    { className: "code-container" },
                    [
                        h(
                            "div",
                            { className: "code-actions" },
                            [
                                h(
                                    "button",
                                    {
                                        className: "copy-btn",
                                        type: "button",
                                        "aria-label": "Copy code",
                                        "data-copy-button": true
                                    },

                                )
                            ]
                        ),
                        h(
                            "div",
                            { className: "code-lang-file" },
                            [
                                h(
                                    "span",
                                    {
                                        className: "code-language",
                                    },
                                    language.toUpperCase()
                                ),
                                h("span", { className: "code-title" }, title),
                            ]
                        ),

                    ]
                )
            ]
        })
    }
}
export const mdxOptions = {
    remarkPlugins: [remarkDirective, remarkCodeGroup, remarkGfm],
    rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, options],
        rehypeCodeMeta,
        rehypeCodeHeader
    ]
}