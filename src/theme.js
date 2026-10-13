import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles';

// Design tokens follow the Minimal UI kit (dark scheme): palette, Public Sans / Barlow
// typography, 8px spacing, rounded cards and soft shadows.

const grey = {
  50: '#FCFDFD',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#1C252E',
  900: '#141A21',
};

const primary = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: '#1C252E',
};

const secondary = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

const bodyFont = ['"Public Sans Variable"', '"Public Sans"', 'sans-serif'].join(',');
const headingFont = ['Barlow', 'sans-serif'].join(',');

const cardShadow = `0 0 2px 0 ${alpha('#000', 0.2)}, 0 12px 24px -4px ${alpha('#000', 0.12)}`;

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary,
    secondary,
    info,
    warning,
    grey,
    text: { primary: '#FFFFFF', secondary: grey[500], disabled: grey[600] },
    background: { default: grey[900], paper: grey[800], neutral: '#28323D' },
    divider: alpha(grey[500], 0.2),
    action: {
      hover: alpha(grey[500], 0.08),
      selected: alpha(grey[500], 0.16),
      focus: alpha(grey[500], 0.24),
      active: grey[500],
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontWeight: 800, lineHeight: 1.25, fontSize: '4rem' },
    h2: { fontFamily: headingFont, fontWeight: 800, lineHeight: 1.33, fontSize: '3rem' },
    h3: { fontFamily: headingFont, fontWeight: 700, lineHeight: 1.5, fontSize: '2rem' },
    h4: { fontWeight: 700, lineHeight: 1.5, fontSize: '1.5rem' },
    h5: { fontWeight: 700, lineHeight: 1.5, fontSize: '1.25rem' },
    h6: { fontWeight: 600, lineHeight: 1.55, fontSize: '1.125rem' },
    subtitle1: { fontWeight: 600, lineHeight: 1.5, fontSize: '1rem' },
    subtitle2: { fontWeight: 600, lineHeight: 1.57, fontSize: '0.875rem' },
    body1: { lineHeight: 1.6, fontSize: '1rem' },
    body2: { lineHeight: 1.57, fontSize: '0.875rem' },
    caption: { lineHeight: 1.5, fontSize: '0.75rem' },
    overline: { fontWeight: 700, lineHeight: 1.5, fontSize: '0.75rem', letterSpacing: 1.2 },
    button: { fontWeight: 700, lineHeight: 1.71, fontSize: '0.875rem', textTransform: 'unset' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: 80 },
        body: { backgroundColor: grey[900] },
        '::selection': { backgroundColor: alpha(primary.main, 0.4) },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          borderRadius: 16,
          backgroundImage: 'none',
          boxShadow: cardShadow,
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8 },
        sizeLarge: { minHeight: 48, paddingLeft: 20, paddingRight: 20 },
        containedPrimary: {
          '&:hover': { boxShadow: `0 8px 16px 0 ${alpha(primary.main, 0.24)}` },
        },
        outlined: {
          borderColor: alpha(grey[500], 0.32),
          color: '#FFFFFF',
          '&:hover': { borderColor: '#FFFFFF', backgroundColor: alpha(grey[500], 0.08) },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8, fontWeight: 500 },
      },
    },
    MuiLink: { defaultProps: { underline: 'hover' } },
    MuiTooltip: {
      styleOverrides: { tooltip: { backgroundColor: grey[700] }, arrow: { color: grey[700] } },
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 2.4 });

export { theme, grey, cardShadow };
