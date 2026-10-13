import { useEffect, useState } from 'react';
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import { profile } from '../data/resume';

export const NAV = [
  { id: 'publications', label: 'Publications' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'honors', label: 'Honors' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={(theme) => ({
        bgcolor: scrolled ? alpha(theme.palette.grey[900], 0.8) : 'transparent',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        borderBottom: `1px solid ${scrolled ? theme.palette.divider : 'transparent'}`,
        transition: 'background-color 200ms, border-color 200ms',
      })}
    >
      <Container>
        <Toolbar disableGutters sx={{ height: { xs: 64, md: 72 } }}>
          <Typography
            component="a"
            href="#top"
            variant="h5"
            sx={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 800,
              color: 'text.primary',
              textDecoration: 'none',
              mr: 'auto',
            }}
          >
            Danial
            <Box component="span" sx={{ color: 'primary.main' }}>
              .
            </Box>
          </Typography>

          <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, mr: 2 }}>
            {NAV.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                sx={{ color: 'text.secondary', fontWeight: 600, '&:hover': { color: 'text.primary' } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            href={profile.cv}
            target="_blank"
            rel="noopener"
            startIcon={<FileDownloadOutlinedIcon />}
            sx={{ bgcolor: 'common.white', color: 'grey.800', '&:hover': { bgcolor: 'grey.400' } }}
          >
            CV
          </Button>

          <IconButton
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
            sx={{ display: { md: 'none' }, ml: 1 }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: 'grey.900' } }}
      >
        <List sx={{ pt: 3 }}>
          {NAV.map((item) => (
            <ListItemButton
              key={item.id}
              component="a"
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              sx={{ px: 3 }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
