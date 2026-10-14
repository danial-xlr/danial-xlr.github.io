import { useEffect, useRef, useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------
// Soft label, as used throughout the Minimal kit for statuses and tags.

export function Label({ color = 'default', children, sx }) {
  return (
    <Box
      component="span"
      sx={(theme) => {
        const main = color === 'default' ? theme.palette.grey[500] : theme.palette[color].main;
        const text = color === 'default' ? theme.palette.grey[300] : theme.palette[color].light;
        return {
          display: 'inline-flex',
          alignItems: 'center',
          height: 24,
          px: 0.75,
          borderRadius: 0.75,
          typography: 'caption',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          color: text,
          bgcolor: alpha(main, 0.16),
          ...sx,
        };
      }}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------
// Fades its children in once they scroll into view.

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export function Reveal({ children, delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        height: 1,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
        '@media (prefers-reduced-motion: reduce)': { opacity: 1, transform: 'none', transition: 'none' },
      }}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Section({ id, overline, title, children, sx }) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      <Container>
        <Reveal>
          <Stack spacing={1} sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {overline}
            </Typography>
            <Typography variant="h3" component="h2">
              {title}
            </Typography>
          </Stack>
        </Reveal>
        {children}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Bullets({ items, sx }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'text.secondary', ...sx }}>
      {items.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          sx={{ mb: 0.75, '&::marker': { color: 'primary.main' } }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------
// Vertical timeline item: dot + connector on the left, content on the right.

export function TimelineItem({ last, children }) {
  return (
    <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 3 }}>
        <Box
          sx={(theme) => ({
            width: 12,
            height: 12,
            flexShrink: 0,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.16)}`,
          })}
        />
        {!last && <Box sx={{ flexGrow: 1, width: 2, mt: 1, bgcolor: 'divider' }} />}
      </Box>
      <Box sx={{ flexGrow: 1, minWidth: 0, pb: last ? 0 : 3 }}>{children}</Box>
    </Box>
  );
}
