"use client";
import Link from 'next/link';
import classes from "./page.module.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function AdminDashboard(){
    const router = useRouter();
    useEffect(()=>{
        const sessionToken = Cookies.get('sessionToken');
        if(!sessionToken){
            router.push('/admin');
        }
    })
    const handleLogout=()=>{
        Cookies.remove('sessionToken');
        router.push('/admin');
    }
    return(
        <header className={classes.header}>
        <Link href='/admin/adminDashboard'>
            Admin Dashboard
        </Link>
        <nav>
            <ul>
                <li><Link href="/admin/exams">Exams</Link></li>
                <li><Link href="/admin/profile">Profile</Link></li>
                <li><button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-md w-full">Logout</button></li>
            </ul>
        </nav>
    </header>
    )
}