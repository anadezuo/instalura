import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const titleBase = 'Instalura';
  const title = headTitle ? `${headTitle} | ${titleBase}` : titleBase;
  const description = 'Quem saber como está essa rede social? Vem conferir  essa construção durante o Bootcamp Front End Avançado da Alura!';
  const url = 'https://instalura-anadezuo.vercel.app/';
  const image = 'https://instalura-anadezuo.vercel.app/images/instalura-capa.png';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />

      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
};
