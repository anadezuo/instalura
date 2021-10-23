import React, { useState } from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import { useForm } from '../../../hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';
import { TypesSnackbar, SnackbarAlert } from '../../foundation/Snackbar';
import formListStates from '../../../information/status/formListStates';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

export default function LoginForm({ onSubmit }) {
  const router = useRouter();

  const initialValues = {
    usuario: '',
    senha: '',
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageSnackbar, setMessageSnackbar] = useState('');

  const [submissionStatus, setSubmissionStatus] = useState(
    formListStates.DEFAULT,
  );

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      loginService
        .login({
          username: values.usuario,
          password: values.senha,
        })
        .then(() => {
          router.push('/app/profile');
          setSubmissionStatus(formListStates.DONE);
        })
        .catch((err) => {
          setMessageSnackbar(
            'Desculpe, mas algo no login não está correto.',
          );
          setOpenSnackbar(true);
          console.error(err);
          setSubmissionStatus(formListStates.ERROR);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      {submissionStatus === formListStates.ERROR && (
      <SnackbarAlert
        type={TypesSnackbar.ERROR}
        message={messageSnackbar}
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
      )}
      {/* <pre>
        {JSON.stringify(form.touched, null, 4)}
      </pre> */}
    </form>
  );
}

LoginForm.defaultProps = {
  onSubmit: undefined,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
