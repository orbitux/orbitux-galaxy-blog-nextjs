'use client'
const { createContext, useContext, useState } = require("react");

const OpenContext = createContext()
export const OpenProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <OpenContext.Provider value={{ open, setOpen }}>
            {children}
        </OpenContext.Provider>
    )
}

export const useOpen = () => {
    return useContext(OpenContext)
}