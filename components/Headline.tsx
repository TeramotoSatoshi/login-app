import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

interface HeadlineProps {
  // プロパティの型定義
  title: string;
}

const Headline: React.FC<HeadlineProps> = ({ title }) => {
  console.log({ title });
  return (
    <>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>{title}</code>
        </p>
        <div>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            Thanks By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority={true} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Headline;