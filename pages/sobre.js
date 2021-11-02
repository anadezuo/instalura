import React from 'react';
import PropTypes from 'prop-types';
import { GraphQLClient, gql } from 'graphql-request';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import AboutScreen from '../src/components/screens/AboutScreen';

function AboutPage({ messages }) {
  return <AboutScreen messages={messages} />;
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});

export async function getStaticProps() {
  const TOKEN = process.env.REACT_APP_DATO_TOKEN;
  const DatoCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;

  const messages = await client.request(query);

  return {
    props: {
      messages,
    },
  };
}

AboutPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};
