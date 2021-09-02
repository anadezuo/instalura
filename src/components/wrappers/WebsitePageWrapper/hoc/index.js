/* eslint-disable react/jsx-props-no-spreading */
// HIGH ORDER COMPONENT - Componente de order superior
import React from 'react';
import WebsiteGlobalProvider from '../provider';
import WebsitePageWrapper from '..';

export default function websitePageHOC(PageComponent, { pageWrapperProps }) {
  // função que receberá funções como parâmetro, e irá retornar outras funções
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
