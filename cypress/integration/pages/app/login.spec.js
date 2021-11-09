/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login/', () => {
  describe('quando preencher e dar submit non form de login', () => {
    it('quero que seja redirecionado para a página inicial', () => {
      cy.intercept(
        'https://instalura-api-git-master.omariosouto.vercel.app/api/login',
      ).as('userLogin');

      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm();

      cy.url().should('include', '/app/profile');

      cy.wait('@userLogin').then((intercept) => {
        const { token } = intercept.response.body.data;

        cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
          .should('exist')
          // valida se o token é igual ao do server
          .should('have.property', 'value', token);
      });
    });
  });
});
