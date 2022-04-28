const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
  reactStrictMode: true,
  /* typescript: {
    tsconfigPath: './tsconfig.json'
  }, */
  compiler: {
    styledComponents: true,
  },
});