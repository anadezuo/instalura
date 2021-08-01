import Head from 'next/head'

export function HeadTab() {
  return (
    <Head>
      <title>Instalura</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      {/*<link rel="manifest" href="/site.webmanifest" />*/}
      <meta name="theme-color" content="#ffffff" />


      {/* Twitter Card*/}
      <meta
        name="twitter:image:src"
        content="https://instalura-anadezuo.vercel.app/instalura-capa.png"
      />
      <meta name="twitter:site" content="@anadezuo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Instalura"
      />
      <meta
        name="twitter:description"
        content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"
      />


      {/* Facebook tag open graph*/}
      <meta
        property="og:image"
        content="https://instalura-anadezuo.vercel.app/instalura-capa.png"
      />
      <meta
        property="og:image:alt"
        content="Imersão Alura - 3º Edição. Criando o Alurakut, baseado no antigo Orkut. Usando ReactJs, NextJs e StyledComponents, em um semana de muito aprendizado. - anadezuo/alurakut: Imersão Alura - 3º Edição...."
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:site_name" content="Bootcamp Front End Avançado" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Instalura" />
      <meta property="og:url" content="http://vercel.com/anadezuo/instalura" />
      <meta
        property="og:description"
        content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"
      />
    </Head>
  )
}
