import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';

function AboutPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      justifyContent="center"
      alignItems="center"
    >
      Página sobre
    </Box>
  );
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
