const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // bloqueia que seja possível realizar o site dentro de um <frame></frame>
            // termo infosec
          },
        ],
      },
    ];
  },
};
