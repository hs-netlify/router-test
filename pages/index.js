import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/gb/en/db">A Simple button to the DB (GB-EN)</Link>
    </div>
  );
}
