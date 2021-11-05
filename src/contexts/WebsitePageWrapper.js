import React from 'react';

const WebsitePageWrapperContext = React.createContext({
  toggleModalCadastro: () => {},
  getCMSContent: (cmsKey) => cmsKey,
});

export default WebsitePageWrapperContext;
