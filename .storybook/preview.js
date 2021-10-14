export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
   //外层包装器
   decorators: [
    (Story) => (
      <div style={{ margin: '3em' }} >
        <Story />
      </div>
    ),
  ],
   //排序
   options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [], 
      locales: '', 
    },
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    });
    return config;
  },
}
// 全局配置在这里