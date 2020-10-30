import Link from 'next/link';
import Head from 'next/head';

export default function Post(){
    return (
        <>
            <Head>
                <title>Pagina de post</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="site feito em nexts.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Primeiro Post</h1>
            <h2>
                <Link href="/listagem">
                    <a>Pagina de listagem</a>
                </Link><br />
                <img src="/asdf.jpg" alt="Vercel Logo"/>
            </h2>
        </>
    );
}