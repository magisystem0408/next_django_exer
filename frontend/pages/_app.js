import 'tailwindcss/tailwind.css'
import Head from "next/head";
import Layout from "../components/layout/layout";


function MyApp({ Component, pageProps }) {
  return (
      <Layout>

        <Head>
          <meta name="viewport" content="width=device-width, inital-scale=1"/>
        </Head>
      <Component {...pageProps} />
      </Layout>
        )
}

export default MyApp
