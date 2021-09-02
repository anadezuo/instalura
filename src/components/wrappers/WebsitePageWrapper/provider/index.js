import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProviderCustomized } from '../../../../hooks/theme';

export default function WebsiteGlobalProvider({ children }) {
  return <ThemeProviderCustomized>{children}</ThemeProviderCustomized>;
}
WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
