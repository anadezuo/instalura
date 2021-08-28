import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Text } from '../../foundation/Text';

// eslint-disable-next-line react/prop-types
export default function Article({ onCadastrarClick }) {
  return (
    <article>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        textAlign={{ xs: 'center', md: 'left' }}
      >
        Compartilhe momentos e conecte-se com amigos
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        textAlign={{ xs: 'center', md: 'left' }}
        marginTop={{ xs: '12px', md: '16px' }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s.
      </Text>

      <Button
        variant="primary.main"
        margin={{ xs: 'auto', md: 'initial' }}
        marginTop={{ xs: '24px', md: '40px' }}
        display="block"
        onClick={onCadastrarClick}
      >
        Cadastrar
      </Button>
    </article>
  );
}

Article.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
