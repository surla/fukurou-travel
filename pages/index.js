import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fukurou Travel</title>
        <meta
          name="description"
          content="Fukurou Travel helps you find truly unique places to eat, sleep, and explore in Japan."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-3xl font-bold">fukurou.</h1>
      </main>
    </div>
  );
}
