import React from 'react';

export const WebsitePageWrapperContext = React.createContext({
  toggleModalCadastro: () => {},
  getCMSContent: (cmsKey) => cmsKey,
});
