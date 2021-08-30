import Head from "next/head";
import styles from "../styles/Login.module.css";
import Input from "../components/Input";

export default function LogIn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Input title="Email" />
        <Input title="Password" />
      </main>

      <footer className={styles.footer}>Made with ❤️ by Debug Lab</footer>
    </div>
  );
}