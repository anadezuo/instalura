import React from 'react';
import PropTypes from 'prop-types';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';

function AboutPage({ messages }) {
  return <AboutScreen messages={messages} />;
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});

export async function getStaticProps() {
  const messages = await getContent();

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
