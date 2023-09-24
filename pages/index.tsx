import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moopa</title>
        <meta
          name="Maintenance"
          content="Site is currently under maintenance"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Write the best SEO for this homepage */}
        <meta
          name="description"
          content="Discover your new favorite anime or manga title! Moopa offers a vast library of high-quality content, accessible on multiple devices and without any interruptions. Start using Moopa today!"
        />
        <meta
          name="keywords"
          content="anime, anime streaming, anime streaming website, anime streaming free, anime streaming website free, anime streaming website free english subbed, anime streaming website free english dubbed, anime streaming website free english subbed and dubbed, anime streaming webs
          ite free english subbed and dubbed download, anime streaming website free english subbed and dubbed"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moopa.live/" />
        <meta
          property="og:title"
          content="Moopa - Free Anime and Manga Streaming"
        />
        <meta
          property="og:description"
          content="Discover your new favorite anime or manga title! Moopa offers a vast library of high-quality content, accessible on multiple devices and without any interruptions. Start using Moopa today!"
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:site_name" content="Moopa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Moopa - Free Anime and Manga Streaming"
        />
        <meta
          name="twitter:description"
          content="Discover your new favorite anime or manga title! Moopa offers a vast library of high-quality content, accessible on multiple devices and without any interruptions. Start using Moopa today!"
        />
        <meta name="twitter:image" content="/preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="h-screen flex items-center justify-center">
        {/* Create an under construction page with tailwind css */}
        <div className="flex flex-col items-center">
          <Image
            width={500}
            height={500}
            src="/maintenance.gif"
            alt="work-on-progress"
            className="w-[26vw] md:w-[15vw]"
          />
          <h1 className="text-2xl sm:text-4xl xl:text-6x font-bold my-4">
            🚧 Site is Under Maintenance 🚧
          </h1>
          <p className="text-base sm:text-lg xl:text-x text-gray-300 mb-6 text-center">
            "Sorry for the inconvenience, we are currently working on the site
            to make it better. Please come back later."
          </p>
          {/* <Link href={`/en/`}>
            <div className="bg-action xl:text-xl text-white font-bold py-2 px-4 rounded hover:bg-[#fb6f44]">
              Go back home
            </div>
          </Link> */}
        </div>
      </main>
    </>
  );
}
