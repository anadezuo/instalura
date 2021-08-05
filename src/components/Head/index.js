import Head from 'next/head';

export function AppHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Instalura</title>
      <meta name="title" content="Instalura" />
      <meta
        name="description"
        content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"
      />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://instalura-anadezuo.vercel.app/"
      />
      <meta property="og:title" content="Instalura" />
      <meta
        property="og:description"
        content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"
      />
      <meta
        property="og:image"
        content="https://instalura-anadezuo.vercel.app/instalura-capa.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://instalura-anadezuo.vercel.app/"
      />
      <meta property="twitter:title" content="Instalura" />
      <meta
        property="twitter:description"
        content="Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!"
      />
      <meta
        property="twitter:image"
        content="https://instalura-anadezuo.vercel.app/instalura-capa.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
