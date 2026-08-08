export const parseMeta = (meta = "") => {
    const result = {}
    const regex = /(\w+)(?:="([^"]*)")?/g
    let match
    while ((match = regex.exec(meta))) {
        const key = match[1]
        const value = match[2]
        result[key] = value ?? true
    }
    return result
}
