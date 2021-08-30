import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import MenuWrapper from './styles/MenuWrapper';
import Button from '../Button';
import { Text } from '../../foundation/Text';
import { ButtonTheme, SelectionIconTheme } from '../../../theme/SwitcherTheme';
import { useTheme } from '../../../hooks/theme';

export default function Menu({ onCadastrarClick }) {
  const { theme, toggleTheme } = useTheme();

  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      text: 'Sobre',
      url: '/sobre',
    },
  ];

  function handleToggleTheme() {
    toggleTheme();
  }

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Center>
        {links.map((link) => (
          <li key={link.text}>
            {/* <NextLink href={link.url}>
              <a>
                {link.text}
              </a>
            </NextLink> */}
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.Center>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
        <ButtonTheme onClick={handleToggleTheme}>
          <SelectionIconTheme isThemeDark={theme.isDark} />
        </ButtonTheme>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
