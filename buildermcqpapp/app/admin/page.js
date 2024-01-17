import AdminLogin from "@/components/admin-login/admin-login";
import Test from "../../assets/Test.jpg";
import classes from "./page.module.css";
import Image from "next/image";
export default function AdminPanel(){
    return(
    <div className="flex h-screen">
        <div className="flex-1 bg-cover bg-center">
            <Image src={Test} className={classes.test} alt="Test image"/>
        </div>
    <div className="flex-1 flex justify-center items-center">
        <AdminLogin/>
    </div>
    </div>
    )
}