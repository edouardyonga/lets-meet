import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <div className={styles.container}>
        <Head>
          <title> Create Next App </title>{" "}
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome, <span className={styles.textGrad}> {"Let'sMeet!"} </span>{" "}
          </h1>
          <p className={styles.description}>
            Get started by creating and account
          </p>
          <Link href="/auth/signup">
            <button className={styles.btnGrad}> SignUp </button>
          </Link>
          {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2> Documentation & rarr; </h2>{" "}
            <p> Find in -depth information about Next.js features and API. </p>{" "}
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2> Learn & rarr; </h2>{" "}
            <p> Learn about Next.js in an interactive course with quizzes! </p>{" "}
          </a>
        </div>{" "} */}
        </main>
      </div>
    </>
  );
}
