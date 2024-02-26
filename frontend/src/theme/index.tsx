import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontSize: '52px',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: '64px',
      letterSpacing: '0.2px',
    },

    h2: {
      fontSize: '44px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '54px',
      letterSpacing: 'normal',
    },

    h3: {
      fontSize: '32px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '42px',
      letterSpacing: '0.1px',
    },

    h4: {
      fontSize: '26px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '32px',
      letterSpacing: '0.2px',
    },

    h5: {
      fontSize: '20px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '26px',
      letterSpacing: '0.2px',
    },

    h6: {
      fontSize: '18px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '24px',
      letterSpacing: '0.2px',
    },

    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },

    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '18px',
      letterSpacing: '0.1px',
    },

    body1: {
      fontSize: '16px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },

    body2: {
      fontSize: '14px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '22px',
      letterSpacing: '0.1px',
    },

    caption: {
      fontSize: '12px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '16px',
      letterSpacing: '0.2px',
    },

    overline: {
      fontSize: '12px',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.5,
    },

    button: {
      fontSize: '14px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '18px',
      textTransform: 'none',
    },
  },

  palette: {
    primary: {
      dark: '#2d8d4b',
      main: '#5ac568',
      light: '#A4EDA0',
    },

    secondary: {
      dark: '#0c1938',
      main: '#425b76',
      light: '#e2f1f8',
    },

    success: {
      main: '#6bea9a',
    },

    error: {
      main: '#e2311d',
    },

    warning: {
      main: '#ffc107',
    },

    grey: {
      '100': '#5AC568',
      '300': '#9BBDCB',
      '500': '#324552',
      '700': '#19293B',
      '900': '#091427',
    },
  },

  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#9BBDCB',
        },
      },
    },
  },
});

export default theme;

export const EXTRA_COLORS = {
  white: '#FFFFFF',
  border: '#E3F3F6',
  darkGrey: '#5F7381',
  trans: 'transparent',
  lightGreen: '#5ac56826',
  background: '#E5E5E5',
  lightRed: '#d3212d',
  darkRed: '#BD0000',
};
