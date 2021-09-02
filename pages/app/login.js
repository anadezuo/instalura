import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePageWrapper/hoc';
import Box from '../../src/components/foundation/layout/Box';

function LoginScreen() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      justifyContent="center"
      alignItems="center"
    >
      Página de login
    </Box>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Login' },
    menuProps: {
      display: false,
    },
  },
});
