import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Date of daily!!!" />
        <p className="description">
          Bla-bla-bla <code>pages/index.js</code>
        </p>
 
      </main>

      <Footer />
    </div>
  )
}
