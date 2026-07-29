export const parseMeta = (meta = "") => {
    const result = {}
    const title = meta.match(/title="([^"]+)"/)
    if (title) {
        result.title = title[1]
    }
    if (meta.includes("copy")) {
        result.copy = true
    }
    if (meta.includes("collapse")) {
        result.collapse = true
    }
    return result
}