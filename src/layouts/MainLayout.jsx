/* eslint-disable react/prop-types */
import Header from "@/components/Header/Header"
import Order from "@/components/Services"
import BlogLayout from "./BlogLayout"
import CodeEditor from "@/components/CodeEditor"


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Order />
            <CodeEditor />
            <BlogLayout />
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout

