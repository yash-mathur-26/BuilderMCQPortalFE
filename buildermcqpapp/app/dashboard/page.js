"use client";
import Logo from "../../components/logo/logo";
import Link from 'next/link';
import classes from "./page.module.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function Dashboard(){
    const router = useRouter();
    useEffect(()=>{
        const sessionToken = Cookies.get('sessionToken');
        if(!sessionToken){
            router.push('/');
        }
    })
    return(
        <header className={classes.header}>
        <Link href='/dashboard'>
            <Logo/>
        </Link>
        <nav>
            <ul>
                <li><Link href="/exams">Exams</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </nav>
    </header>
    )
}