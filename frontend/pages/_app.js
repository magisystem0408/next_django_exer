import 'tailwindcss/tailwind.css'
import Head from "next/head";
import Layout from "../components/layout/layout";


function MyApp({ Component, pageProps }) {
  return (
      <Layout>


      <Component {...pageProps} />
      </Layout>
        )
}

export default MyApp
