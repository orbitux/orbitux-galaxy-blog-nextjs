'use client'

import { createContext, useContext, useEffect, useState } from "react"



const CodeGroupContext = createContext()
const STORAGE_KEY = 'code-group-tab'
export const CodeGroupProvider = ({ children }) => {
    const [preferredTab, setPreferredTab] = useState(null)
    useEffect(() => {
        if (preferredTab === null) return
        localStorage.setItem(STORAGE_KEY, String(preferredTab))
    }, [preferredTab])
    useEffect(() => {
        const savedTab = localStorage.getItem(STORAGE_KEY)
        if (savedTab !== null) {
            setPreferredTab(Number(savedTab))
        }
    }, [])
    return (
        <CodeGroupContext.Provider value={{ preferredTab, setPreferredTab }}>
            {children}
        </CodeGroupContext.Provider>
    )
}
export const useCodeGroup = () => {
    return useContext(CodeGroupContext)
}