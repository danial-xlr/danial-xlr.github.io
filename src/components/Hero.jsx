import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import avatar from '../assets/avatar.jpg';
import { profile, researchInterests } from '../data/resume';
import { Reveal } from './ui';

export function Hero() {
  return (
    <Box
      id="top"
      component="header"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 16, md: 22 },
        pb: { xs: 10, md: 14 },
        // Soft green / cyan glows in place of the kit's blurred background images.
        background: [
          `radial-gradient(600px circle at 85% 20%, ${alpha(theme.palette.primary.main, 0.18)}, transparent 60%)`,
          `radial-gradient(500px circle at 5% 90%, ${alpha(theme.palette.info.main, 0.12)}, transparent 60%)`,
        ].join(','),
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          backgroundImage: `radial-gradient(${alpha(theme.palette.grey[500], 0.24)} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, #000 30%, transparent 90%)',
          pointerEvents: 'none',
        },
      })}
    >
      <Container sx={{ position: 'relative' }}>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Reveal>
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                {profile.headline}
              </Typography>
              <Typography variant="h1" sx={{ mt: 1 }}>
                Hi, I&apos;m{' '}
                <Box
                  component="span"
                  sx={(theme) => ({
                    backgroundImage: `linear-gradient(300deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.info.light} 100%)`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  })}
                >
                  Danial Nahofteh
                </Box>
              </Typography>
            </Reveal>

            <Reveal delay={100}>
              <Typography
                variant="h6"
                component="p"
                sx={{ mt: 3, color: 'text.secondary', fontWeight: 400, maxWidth: 560, mx: { xs: 'auto', md: 0 } }}
              >
                {profile.tagline}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                spacing={0.75}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mt: 2, color: 'text.secondary' }}
              >
                <PlaceOutlinedIcon fontSize="small" />
                <Typography variant="body2">{profile.location}</Typography>
              </Stack>
            </Reveal>

            <Reveal delay={200}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                alignItems="center"
                sx={{ mt: 5 }}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  href={profile.cv}
                  target="_blank"
                  rel="noopener"
                  startIcon={<FileDownloadOutlinedIcon />}
                >
                  Download CV
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  href={`mailto:${profile.email}`}
                  startIcon={<MailOutlineRoundedIcon />}
                >
                  Get in touch
                </Button>
                <Stack direction="row" spacing={0.5}>
                  <Tooltip title="GitHub" arrow>
                    <IconButton
                      href={profile.github.url}
                      target="_blank"
                      rel="noopener"
                      aria-label="GitHub"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="LinkedIn" arrow>
                    <IconButton
                      href={profile.linkedin.url}
                      target="_blank"
                      rel="noopener"
                      aria-label="LinkedIn"
                      sx={{ color: '#0A66C2' }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
            </Reveal>

            <Reveal delay={300}>
              <Box sx={{ mt: 6 }}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Research interests
                </Typography>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  useFlexGap
                  spacing={1}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  sx={{ mt: 1.5 }}
                >
                  {researchInterests.map((interest) => (
                    <Chip key={interest} label={interest} variant="outlined" />
                  ))}
                </Stack>
              </Box>
            </Reveal>
          </Box>

          <Reveal>
            <Box
              sx={(theme) => ({
                position: 'relative',
                width: { xs: 220, sm: 280, md: 360 },
                height: { xs: 220, sm: 280, md: 360 },
                borderRadius: '50%',
                p: 0.75,
                background: `conic-gradient(from 210deg, ${theme.palette.primary.main}, ${theme.palette.info.main}, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                boxShadow: `0 24px 64px -12px ${alpha(theme.palette.primary.main, 0.32)}`,
              })}
            >
              <Box
                component="img"
                src={avatar}
                alt="Portrait of Danial Nahofteh"
                width={360}
                height={360}
                sx={{
                  width: 1,
                  height: 1,
                  display: 'block',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: (theme) => `6px solid ${theme.palette.grey[900]}`,
                }}
              />
            </Box>
          </Reveal>
        </Stack>
      </Container>
    </Box>
  );
}
