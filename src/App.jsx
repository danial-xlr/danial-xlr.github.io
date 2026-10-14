import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import {
  About,
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
          <About />
        </Box>
        <Publications />
        <Box sx={shaded}>
          <Research />
        </Box>
        <Education />
        <Box sx={shaded}>
          <Experience />
        </Box>
        <Projects />
        <Box sx={shaded}>
          <Skills />
        </Box>
        <Honors />
      </main>
      <Footer />
    </>
  );
}
