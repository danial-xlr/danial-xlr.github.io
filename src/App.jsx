import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import {
  Education,
  Experience,
  Footer,
  Honors,
  Projects,
  Publications,
  Research,
  Skills,
} from './components/sections';

// Alternate section backgrounds the way the Minimal landing pages do.
const shaded = (theme) => ({ bgcolor: alpha(theme.palette.grey[800], 0.4) });

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Box sx={shaded}>
          <Publications />
        </Box>
        <Research />
        <Box sx={shaded}>
          <Education />
        </Box>
        <Experience />
        <Box sx={shaded}>
          <Projects />
        </Box>
        <Skills />
        <Box sx={shaded}>
          <Honors />
        </Box>
      </main>
      <Footer />
    </>
  );
}
