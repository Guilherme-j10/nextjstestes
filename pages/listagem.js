import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Listagem(){
    return (
        <Layout>
            <Head>
                <title>Pagina de listagem</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="site feito em nexts.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Rota de Listagem</h1>
            <h2>
                <Link href="/posts/post">
                    <a>Pagina dos posts</a>
                </Link>
            </h2>
        </Layout>
    );
}