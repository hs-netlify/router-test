import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/gb/en/db">A Simple button to the DB (GB-EN)</Link>
      <Link href="/us/en/db">A Simple button to the DB (US-EN)</Link>
      <Link href="/fr/fr/db">A Simple button to the DB (FR-FR)</Link>
    </div>
  );
}
