import Head from "next/head";
import { places } from "../data/places";

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
        <h1 className="text-center text-3xl font-bold mt-5">fukurou.</h1>
        <div className="container mx-auto my-20 max-w-5xl">
          <h3 className="text-xl mb-5 font-bold">Explore</h3>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => (
              <li key={place.id} className="max-w-md rounded shadow">
                <div className="flex flex-col space-y-2 p-5">
                  <p className="text-sm text-blue-500">{place.category}</p>
                  <p className="text-lg font-medium">{place.title}</p>
                  <p className="text-gray-600">{place.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
