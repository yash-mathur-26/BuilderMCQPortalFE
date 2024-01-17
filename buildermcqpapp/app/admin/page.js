import AdminLogin from "@/components/admin-login/admin-login";
import Test from "../../assets/Test.jpg";
import classes from "./page.module.css";
import Image from "next/image";
export default function AdminPanel(){
    return(
    <div className="flex h-screen">
        <main style={{ color: 'white', textAlign: 'center' }}>
            <h1 className={classes.header}>Admin Panel</h1>
        </main>
    <div className="flex-1 bg-cover bg-center">
        <Image src={Test} alt="Test image"/>
    </div>
    <div className="flex-1 flex justify-center items-center">
        <AdminLogin/>
    </div>
    </div>
    )
}