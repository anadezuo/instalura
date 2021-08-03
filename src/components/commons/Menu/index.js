import React, { useState } from 'react';
import { Logo } from '../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import { Text } from '../../foundation/Text';
import styled from 'styled-components';
import { ThemeLight, ThemeDark } from '../../../components/theme';
import SwitcherTheme from '../../../components/SwitcherTheme';

const ButtonTheme = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

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
          <SwitcherTheme theme={isDark} />
        </ButtonTheme>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
