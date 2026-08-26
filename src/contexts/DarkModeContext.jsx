'use client'
const { createContext, useState, useContext, useEffect } = require("react");

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const [darkmode, setDarkMode] = useState(true)
    useEffect(()=>{
        const saved = localStorage.getItem('dark')
        if(saved !== null){
            setDarkMode(saved === 'true')
        }
    },[])
    useEffect(() => {
        localStorage.setItem('dark', String(darkmode))
    }, [darkmode])

    return (
        <DarkModeContext.Provider value={{ darkmode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDark = () => {
    return useContext(DarkModeContext)
}