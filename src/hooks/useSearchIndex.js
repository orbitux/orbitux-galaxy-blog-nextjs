import { useMemo } from "react"

export const useFuse = (posts) => {
    return useMemo(() => {
        return new Fuse(posts, {
            includeScore: true,
            includeMatches: true,
            threshold: 0.35,
            ignoreLocation: true,
            minMatchCharLength: 2,
            keys: [
                {
                    name: "title",
                    weight: 5
                },
                {
                    name: "description",
                    weight: 3
                },
            ]
        })

    }, [posts])
}

export const useResults = (query, fuse) => {
    return useMemo(() => {
        if (!query) return []
        return fuse.search(query)
    }, [query, fuse])
}