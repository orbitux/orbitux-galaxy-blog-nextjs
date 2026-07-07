/* eslint-disable react/prop-types */
import { useContext } from "react"
import { MenuContext } from "../contexts/MenuOpenContext"
import Header from "@/components/Header/Header"
import Order from "@/components/Services"
import BlogPage from "@/app/blog/page"
import BlogLayout from "./BlogLayout"
import CodeEditor from "@/components/CodeEditor"
import { OpenProvider } from "@/contexts/OpenDialogContext"


const MainLayout = ({ children }) => {
    // const { setIsMenuOpen } = useContext(MenuContext)
    // className="fanum" onClick={() => setIsMenuOpen(false)}
    return (
        <OpenProvider>
            <div>
                <Header />

                <Order />
                <CodeEditor />
                <BlogLayout />
                <main>
                    {children}
                </main>
            </div>
        </OpenProvider>
    )
}

export default MainLayout

