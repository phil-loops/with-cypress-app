import { GetStaticProps } from "next";
import AboutComponent from "../components/about-component";
import styles from "../styles/Home.module.css";

export default function About({ identity }: { identity: string }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AboutComponent identity={identity} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      identity: process.env.identity,
    },
  };
};
