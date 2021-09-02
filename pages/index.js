// import React from 'react';
// import WebsitePageWrapper from '../src/components/wrappers/WebsitePageWrapper';
import HomeScreen from '../src/components/screens/Home';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Home' },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});

/* export default function Home() {
  return (
    <WebsitePageWrapper
      seoProps={{ headTitle: 'Home' }}
      pageBoxProps={{
        backgroundImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
      }}
      menuProps={{
        display: true,
      }}
    >
      <HomeScreen />
    </WebsitePageWrapper>
  );
}
*/

/* <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    > */
