import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePageWrapper/hoc';

function FAQPage({ faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} />;
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Perguntas frequentes' },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  return {
    props: {
      /* A prop retornada aqui, vai para o export default, que é a function
      websitePageHOC, depois nele, é passado para o PageComponent, que volta
      para o FAQPage */
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
