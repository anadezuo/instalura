import React, { useState } from 'react';
import { Logo } from '../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import { Text } from '../../foundation/Text';
import { ThemeLight, ThemeDark } from '../../../components/theme';
import {
  ButtonTheme,
  SelectionIconTheme,
} from '../../theme/SwitcherTheme';

export default function Menu({ setTheme }) {
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
    isDark ? setTheme(ThemeLight) : setTheme(ThemeDark);
    setIsDark(!isDark);
  };

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Center>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.text}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.Center>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
        <ButtonTheme onClick={changeTheme}>
          <SelectionIconTheme theme={isDark} />
        </ButtonTheme>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
