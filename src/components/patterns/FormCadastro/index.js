import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import iconClose from '../../../assets/images/iconClose.png';
import { TypesSnackbar, SnackbarAlert } from '../../foundation/Snackbar';

const ButtonClose = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [infoUser, setInfoUser] = useState({ nome: '', usuario: '' });
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStates.DEFAULT,
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setInfoUser({
      ...infoUser,
      [fieldName]: event.target.value,
    });
  }

  function handleCadastro(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
    setOpenSnackbar(true);

    const userDTO = {
      username: infoUser.usuario,
      name: infoUser.nome,
    };
    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível cadastrar o usuário');
      })
      .then((respostaConvertidaEmObjeto) => {
        setSubmissionStatus(formStates.DONE);
        setInfoUser({ nome: '', usuario: '' });
        console.log(respostaConvertidaEmObjeto);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
        console.error(error);
      });
  }

  const isActiveButtonCadastro = infoUser.usuario.length === 0 || infoUser.nome.length === 0;

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
          placeholder="Nome"
          name="nome"
          value={infoUser.nome}
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
        {isFormSubmitted && submissionStatus === formStates.DONE && (
          <SnackbarAlert
            type={TypesSnackbar.SUCCESS}
            message="Usuário cadastrado com sucesso!"
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
          />
        )}

        {isFormSubmitted && submissionStatus === formStates.ERROR && (
          <SnackbarAlert
            type={TypesSnackbar.ERROR}
            message="Usuário não cadastrado."
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
          />
        )}
      </div>
    </form>
  );
}

export default function FormCadastro({ theme, propsModal, onCloseModal }) {
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
            onClick={onCloseModal}
          >
            <Image src={iconClose} alt="Imagem em x que fecha a tela" />
          </ButtonClose>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  propsModal: PropTypes.shape({}).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
