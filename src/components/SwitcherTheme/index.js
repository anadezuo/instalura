import React from 'react'
import Image from 'next/image'
import iconThemeLight from '../../assets/images/iconThemeLight.png'
import iconThemeDark from '../../assets/images/iconThemeDark.png'
import styled from 'styled-components'

export const Icon = styled.img`
  height: 25px;
  width: 25px;
`

const light = <Image src={iconThemeLight} alt="Tema claro" />
const dark = <Image src={iconThemeDark} alt="Tema claro" />

//ira receber um tema
export default function selectionIconTheme({theme}) {
  return (theme ? dark : light);
};
