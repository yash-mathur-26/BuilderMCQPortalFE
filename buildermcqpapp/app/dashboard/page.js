import Logo from "../../components/logo/logo";
import Link from 'next/link';
import classes from "./page.module.css";
export default function Dashboard(){
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