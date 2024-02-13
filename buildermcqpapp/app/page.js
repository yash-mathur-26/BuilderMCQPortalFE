import UserLogin from "@/components/user-login/user-login";
import Test from "../assets/Test.jpg";
import classes from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-cover bg-center">
        <Image src={Test} className={classes.test} alt="Test image" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <UserLogin />
      </div>
    </div>
  );
}
