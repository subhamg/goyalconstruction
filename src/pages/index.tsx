import Hero from "@components/Hero";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
