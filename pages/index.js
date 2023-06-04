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
        <Header title="Date of daily" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    <div class="panda">
  <div class="ear"></div>
  <div class="face">
    <div class="eye-shade"></div>
    <div class="eye-white">
      <div class="eye-ball"></div>
    </div>
    <div class="eye-shade rgt"></div>
    <div class="eye-white rgt">
      <div class="eye-ball"></div>
    </div>
    <div class="nose"></div>
    <div class="mouth"></div>
  </div>
  <div class="body"> </div>
  <div class="foot">
    <div class="finger"></div>
  </div>
  <div class="foot rgt">
    <div class="finger"></div>
  </div>
</div>
<div class="form">
  <div class="hand"></div>
  <div class="hand rgt"></div>
  <h1 id="myFirstClick">Date of daily</h1>
  <div class="employers-main-flex">
    <div class="employers-numbers">
      <div class="numbers">1</div>
      <div class="numbers">2</div>
      <div class="numbers">3</div>
      <div class="numbers">4</div>
      <div class="numbers">5</div>
      <div class="numbers">6</div>
      <div class="numbers">7</div>
      <div class="numbers">8</div>
      <div class="numbers">9</div>
      <div class="numbers">10</div>
      <div class="numbers">11</div>
      <div class="numbers">12</div>
      <div class="numbers">13</div>
    </div>
    <div class="employers-main">
      <div class="employers1"></div>
      <div class="employers2"></div>
      <div class="employers3"></div>
      <div class="employers4"></div>
      <div class="employers5"></div>
      <div class="employers6"></div>
      <div class="employers7"></div>
      <div class="employers8"></div>
      <div class="employers9"></div>
      <div class="employers10"></div>
      <div class="employers11"></div>
      <div class="employers12"></div>
      <div class="employers13"></div>
    </div>

  </div>

</div>
      </main>

      <Footer />
    </div>
  )
}
