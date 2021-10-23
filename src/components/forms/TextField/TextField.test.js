import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Ju"
        onChange={() => {}}
        name="nome"
      />
      ,
    );
    // screen.debug();
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />
          ,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'devsoutinho@gmail.com');
        expect(onChangeMock).toHaveBeenCalledTimes(21);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective invalid field error message', () => {
      render(
        <TextField
          placeholder="Senha"
          value="aaaaaa"
          onChange={() => {}}
          name="senha"
          isTouched
          error="Sua senha precisa ter ao menos 8 caracteres"
        />
        ,
      );

      const inputEmail = screen.getByPlaceholderText(/senha/i);
      expect(inputEmail).toHaveValue('aaaaaa');
      expect(screen.getByRole('alert')).toHaveTextContent('Sua senha precisa ter ao menos 8 caracteres');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
