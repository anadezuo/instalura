import Head from 'next/head'

export function HeadTab() {
  return (
    <Head>

      {/* Primary Meta Tags */}
      <title>Instalura</title>
      <meta name="title" content="Instalura"/>
      <meta name="description" content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"/>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://instalura-anadezuo.vercel.app/"/>
      <meta property="og:title" content="Instalura"/>
      <meta property="og:description" content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"/>
      <meta property="og:image" content="https://instalura-anadezuo.vercel.app/instalura-capa.png"/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://instalura-anadezuo.vercel.app/"/>
      <meta property="twitter:title" content="Instalura"/>
      <meta property="twitter:description" content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"/>
      <meta property="twitter:image" content="https://instalura-anadezuo.vercel.app/instalura-capa.png"/>


    </Head>
  )
}
