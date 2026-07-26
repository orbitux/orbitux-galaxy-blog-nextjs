import { slugify } from "../slugify"

export const extractHeadings = (content) => {
    const regex = /^(#{1,6})\s+(.*)$/gm
    const headings = []
    let match

    while ((match = regex.exec(content)) !== null) {
        headings.push({
            level: match[1].length,
            text: match[2],
            id: slugify(match[2])
        })
    }
    return headings
}