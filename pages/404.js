import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';

function PageNotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      justifyContent="center"
      alignItems="center"
    >
      Página não encontrada!
    </Box>
  );
}

export default websitePageHOC(PageNotFound, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Página não encontrada' },
  },
});
