import type { NextPage } from "next";
import Head from "next/head";
import MainTag from "@/components/MainTag";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTag title="index" />
    </>
  );
};

export default Home;
