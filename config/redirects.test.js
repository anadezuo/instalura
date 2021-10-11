import redirects from './redirects';

// Test Driven Development
describe('config/redirects', () => {
  it('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot(); // Fotografia/Insta/Polaroid
  });
});
