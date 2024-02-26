import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'emotion-theming';
import GreenCommuteTheme from '../src/theme/index';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={GreenCommuteTheme}>
      <ThemeProvider theme={GreenCommuteTheme}>
        <Story />
      </ThemeProvider>
    </MUIThemeProvider>
  ),
];
