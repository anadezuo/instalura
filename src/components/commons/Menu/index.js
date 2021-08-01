import React from 'react';
import { Logo } from '../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';

export default function Menu() {
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

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Center>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <a href={link.url}> {link.text}</a>
            </li>
          );
        })}
      </MenuWrapper.Center>
      <MenuWrapper.RightSide>
        <Button ghost variant='secondary.main'>Entrar</Button>
        <Button variant='primary.main'>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
