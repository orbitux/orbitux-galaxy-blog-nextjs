import { parseMeta } from "@/lib/parseMeta"

const { visit } = require("unist-util-visit")

const remarkCodeGroup = () => {
    return (tree) => {
        visit(tree, (node) => {
            if (node.type === "containerDirective" && node.name === "code-group") {
                node.data ||= {}
                node.data.hName = "CodeGroup"
                const codes = node.children.filter(child => child.type === "code")
                const tabs = codes
                    .map(child => ({
                        ...parseMeta(child.meta),
                        language: child.lang || "text"
                    }))
                node.data.hProperties = {
                    tabs: JSON.stringify(tabs)
                }
            }
        })
    }
}
export default remarkCodeGroup