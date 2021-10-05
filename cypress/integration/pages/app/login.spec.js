/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.visit('/app/login/');

    cy.intercept(
      'https://instalura-api-git-master-omariosouto.vercel.app/api/login',
    ).as('userLogin');

    // preencher o input usuario
    // document.querySelector('input[name="usuario"]')
    cy.get('#formCadastro input[name="usuario"]').type('omariosouto');
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    // clicar no botão de submit!
    cy.get('#formCadastro button[type="submit"]').click();

    cy.url().should('include', '/app/profile');

    cy.wait('@userLogin').then((intercept) => {
      const { token } = intercept.response.body.data;

      cy.getCookie('APP_TOKEN')
        .should('exist')
        // valida se o token é igual ao do server
        .should('have.property', 'value', token);
    });
  });
});
