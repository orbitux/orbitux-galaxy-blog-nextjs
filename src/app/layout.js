
import { MenuProvider } from "@/contexts/MenuOpenContext";
import './main.css'
import { PostOptionProvider } from "@/contexts/PostOptionContext";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import { Toaster } from "react-hot-toast";
import { OpenProvider } from "@/contexts/OpenDialogContext";
import { DarkModeProvider } from "@/contexts/DarkModeContext";


export const metadata = {
    metadatabase: new URL("https://orbitux.space"),
    title: {
        default: "Orbitux Blog",
        template: "%s | Orbitux"
    },
    description: "Orbitux Blog - مقالات و آموزش های لینوکس و برنامه نویسی",
    keywords: [
        "Orbitux",
        "Programming",
        "Linux",
        "Next.js",
        "React",
        "Web Development",
        "Jacascript"
    ],
    authors: [
        {
            name: "Orbitux",
            url: "https://orbitux.space"
        }
    ],
    icons: {
        icon: "/orb3.png",
    },
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://orbitux.space",
        siteName: "Orbitux",
        description: "Orbitux Blog — مقالات و آموزش‌های برنامه‌نویسی، لینوکس، وب و تکنولوژی.",
        images: [
            {
                url: "/orb3.png",
                width: 512,
                height: 512,
                alt: "Orbitux"
            }
        ]
    }
};
export default function RootLayout({ children }) {
    return (
        <html lang="fa">
            {/* <link rel="icon" href="/orb3.png" type="image/png" /> */}
            <body className="bg-black text-white shadow-border">
                <PostOptionProvider>
                    <MenuProvider>
                        <OpenProvider>
                            <DarkModeProvider>
                                <Navbar />
                                <BreadCrumb />
                                <Toaster position="top-center" reverseOrder={true} />
                                {children}
                                <Footer />
                            </DarkModeProvider>
                        </OpenProvider>
                    </MenuProvider>
                </PostOptionProvider>
            </body>
        </html>
    );
}
