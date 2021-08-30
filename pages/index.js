import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topNav}>
          <p>Logo</p>
          <div className={styles.right}>
            <p>Ahmed Ahmed</p>
          </div>
        </div>

        <div className={styles.dashboard}>
          <nav className={styles.leftNav}>
            <p>Dashboard</p>
            <p>Profile</p>
            <p>Financials</p>
            <p>Make Payment</p>
          </nav>
          <div className={styles.content}>
            <p>Dashboard</p>
            <div className={styles.cardHolders}>
              <div>
                <Card title="Subscription Balance" type="NGN 0" />
                <div className={styles.membership}>
                  <p>Membership Detail:</p>
                  <div>
                    <p>Full Name:</p>
                    <p>Registration Number:</p>
                    <p>Date Registered:</p>
                  </div>
                </div>
              </div>

              <Card title="Grade" type="Member" />
              <Card title="Membership Status" type="Active" />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Made with ❤️ by Debug Lab</footer>
    </div>
  );
}
