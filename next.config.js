const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: false,
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withNextra(nextConfig);