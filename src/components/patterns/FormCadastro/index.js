import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import iconClose from '../../../assets/images/iconClose.png';

const ButtonClose = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background.main.color};
            
`;

function FormContent() {
  const [infoUser, setInfoUser] = useState({ email: '', usuario: '' });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setInfoUser({
      ...infoUser,
      [fieldName]: event.target.value,
    });
  }

  function handleCadastro(event) {
    event.preventDefault();
  }

  const isActiveButtonCadastro = infoUser.usuario.length === 0 || infoUser.email.length === 0;

  return (
    <form onSubmit={handleCadastro}>
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está rolando no bairro,
        complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Email"
          type="email"
          name="email"
          value={infoUser.email}
          onChange={handleChange} // capturadores
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={infoUser.usuario}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button
          variant="primary.main"
          type="submit"
          disabled={isActiveButtonCadastro}
          fullWidth
        >
          Cadastrar
        </Button>
      </div>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ theme, propsModal, setModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          // eslint-disable-next-line react/prop-types
          backgroundColor={theme.colors.background.main.color}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsModal}
        >
          <ButtonClose
            onClick={() => {
              setModal(false);
            }}
          >
            <Image src={iconClose} alt="Imagem em x que fecha a tela" />
          </ButtonClose>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
