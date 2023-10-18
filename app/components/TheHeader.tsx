import "./../../app/page.module.css";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata={
    title:"Header"
}

const TheHeader = ()=>{
    return(
        <header className="container">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
    )
}
export {TheHeader};