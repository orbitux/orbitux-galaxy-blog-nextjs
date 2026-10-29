/* eslint-disable react/prop-types */
import Order from "@/components/Services"
import BlogLayout from "./BlogLayout"
import CodeEditor from "@/components/CodeEditor"
import Hero from "@/components/Hero/Hero"


const MainLayout = ({ children }) => {
    return (
        <div>
            <Hero />
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

