
import { MenuProvider } from "@/contexts/MenuOpenContext";
import './main.css'
import { PostOptionProvider } from "@/contexts/PostOptionContext";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import { Toaster } from "react-hot-toast";
import { OpenProvider } from "@/contexts/OpenDialogContext";


export const metadata = {
    title: 'orbitux blog',
    description: 'the personal orbitux website',
    verification: {
        google: 'YqRFW-zvQbF2eLCVZlaIVRjbXI932nrXpls25hlBKEM',
    },
    icons: {
        icon: '/orb3.png',
    },
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/orb3.png" type="image/png" />
            <body className="bg-black text-white shadow-border">
                <PostOptionProvider>
                    <MenuProvider>
                        <OpenProvider>
                            <Navbar />
                            <BreadCrumb />
                            <Toaster position="top-center" reverseOrder={true} />
                            {children}
                            <Footer />
                        </OpenProvider>
                    </MenuProvider>
                </PostOptionProvider>
            </body>
        </html>
    );
}
