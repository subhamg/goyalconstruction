import { ReactFragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactFragment;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Stamurai Blog</title>
        <meta
          name="description"
          content="Get the most up-to-date information on stuttering, therapy techniques, tips on how to stop stuttering, and more."
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <Header />
      <div className="px-20 bg-gradient-to-b from-gc-primary-light to-gc-white-shade">
        {children}
      </div>
      <Footer />
    </>
  );
}
