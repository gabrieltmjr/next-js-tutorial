import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad = { () =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
      />
            <Image
            src="/images/profile.jpg" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Gabriel Machado Jr."
            />
            <h1>First Post</h1>
            <h2>
            <Link href="/">Back to home</Link>
            </h2>
        </>
      );
}