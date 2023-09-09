import './globals.css'
import {Inter} from 'next/font/google'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700']
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.variable} flex flex-col items-center justify-start`}>
            <Nav/>
            {children}
            <Footer/>
        </body>
        </html>
    )
}
