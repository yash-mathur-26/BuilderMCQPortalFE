import Link from "next/link";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        Builder Exam Portal
      </Link>
    </header>
  );
}
