import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import MenuWrapper from './styles/MenuWrapper';
import Button from '../Button';
import { Text } from '../../foundation/Text';
import { ThemeLight, ThemeDark } from '../../../theme';
import { ButtonTheme, SelectionIconTheme } from '../../../theme/SwitcherTheme';

export default function Menu({ setTheme, onCadastrarClick }) {
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

  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    // eslint-disable-next-line no-unused-expressions
    isDark ? setTheme(ThemeLight) : setTheme(ThemeDark);
    setIsDark(!isDark);
  };

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
        <ButtonTheme onClick={changeTheme}>
          <SelectionIconTheme isThemeDark={isDark} />
        </ButtonTheme>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  setTheme: PropTypes.func.isRequired,
  onCadastrarClick: PropTypes.func.isRequired,
};
