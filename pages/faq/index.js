import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
  /* FIXME: essa é a forma de ser realizado com react puro,
  porém não a melhor forma de fazer com next */
  /* const [faqCategories, setFaqCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('https://instalura-api.vercel.app/api/content/faq')
      .then(async (res) => {
        const response = await res.json();
        return response.data;
      })
      .then((faqCategoriesFromServer) => {
        setFaqCategories(faqCategoriesFromServer);
      });
  });

  const props = {
    faqCategories,
  }; */

  return (
    <FAQScreen
      faqCategories={faqCategories}
    />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  // Falar sobre tamanho da página aqui e tomar cuidado com recursos extras que vão pra página
  return {
    props: {
      faqCategories,
    },
  };
}

FAQPage.propTypes = {
  faqCategories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          slug: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};
