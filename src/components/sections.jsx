import { Fragment } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';

import {
  education,
  honors,
  languages,
  profile,
  projects,
  publications,
  research,
  skills,
  teaching,
  work,
} from '../data/resume';
import { Bullets, Label, Reveal, Section, TimelineItem } from './ui';

// ----------------------------------------------------------------------

function IconBadge({ icon, color = 'primary' }) {
  return (
    <Box
      sx={(theme) => ({
        width: 48,
        height: 48,
        flexShrink: 0,
        display: 'grid',
        placeItems: 'center',
        borderRadius: 1.5,
        color: theme.palette[color].light,
        bgcolor: alpha(theme.palette[color].main, 0.16),
      })}
    >
      {icon}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Publications() {
  return (
    <Section id="publications" overline="Publications" title="Papers">
      <Stack spacing={3}>
        {publications.map((pub) => (
          <Reveal key={pub.title}>
            <Card
              sx={(theme) => ({
                p: { xs: 3, md: 4 },
                border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, transparent 50%), ${theme.palette.grey[800]}`,
              })}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <IconBadge icon={<ArticleOutlinedIcon />} />
                <Box sx={{ flexGrow: 1 }}>
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={1.5}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                  >
                    <Typography variant="h5" component="h3">
                      {pub.title}
                    </Typography>
                    <Label color="warning">{pub.status}</Label>
                  </Stack>

                  <Typography variant="body2" sx={{ mt: 1.5, color: 'text.secondary' }}>
                    {pub.authors.map((author, i) => (
                      <Fragment key={author}>
                        {i > 0 && ', '}
                        {author === pub.self ? (
                          <Box component="strong" sx={{ color: 'text.primary', fontWeight: 700 }}>
                            {author}
                          </Box>
                        ) : (
                          author
                        )}
                      </Fragment>
                    ))}
                  </Typography>

                  <Typography variant="subtitle2" sx={{ mt: 0.5, color: 'primary.light', fontStyle: 'italic' }}>
                    {pub.venue}
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
                    {pub.summary}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Reveal>
        ))}
      </Stack>
    </Section>
  );
}

// ----------------------------------------------------------------------

export function Research() {
  return (
    <Section id="research" overline="Research experience" title="What I'm working on">
      <Grid container spacing={3}>
        {research.map((item, index) => (
          <Grid item xs={12} md={6} key={item.title}>
            <Reveal delay={index * 100}>
              <Card sx={{ p: { xs: 3, md: 4 }, height: 1 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                  <Label color="primary">{item.kind}</Label>
                  <Label>{item.period}</Label>
                </Stack>
                <Typography variant="h6" component="h3">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: 'text.disabled' }}>
                  {item.supervisor}
                </Typography>
                <Bullets items={item.points} />
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

// ----------------------------------------------------------------------

export function Education() {
  return (
    <Section id="education" overline="Education" title="Academic background">
      <Grid container spacing={3}>
        {education.map((item, index) => (
          <Grid item xs={12} md={6} key={item.school}>
            <Reveal delay={index * 100}>
              <Card sx={{ p: { xs: 3, md: 4 }, height: 1 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 2.5 }}>
                  <IconBadge icon={<SchoolOutlinedIcon />} color="info" />
                  <Box>
                    <Typography variant="h6" component="h3">
                      {item.school}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.degree}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      {item.period}
                    </Typography>
                  </Box>
                </Stack>
                <Bullets items={item.points} />
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

// ----------------------------------------------------------------------

export function Experience() {
  return (
    <Section id="experience" overline="Experience" title="Work & teaching">
      <Grid container spacing={{ xs: 6, md: 4 }}>
        <Grid item xs={12} md={7}>
          <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.disabled', textTransform: 'uppercase' }}>
            Work experience
          </Typography>
          {work.map((job, index) => (
            <TimelineItem key={job.role} last={index === work.length - 1}>
              <Reveal delay={index * 100}>
                <Card sx={{ p: 3 }}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    spacing={1}
                    sx={{ mb: 1.5 }}
                  >
                    <Box>
                      <Typography variant="subtitle1" component="h3">
                        {job.role}
                      </Typography>
                      <Link href={job.url} target="_blank" rel="noopener" variant="body2">
                        {job.company}
                      </Link>
                    </Box>
                    <Box>
                      <Label>{job.period}</Label>
                    </Box>
                  </Stack>
                  <Bullets items={job.points} />
                </Card>
              </Reveal>
            </TimelineItem>
          ))}
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.disabled', textTransform: 'uppercase' }}>
            Teaching experience
          </Typography>
          <Stack spacing={3}>
            {teaching.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="subtitle1" component="h3" sx={{ mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Bullets items={item.points} />
                </Card>
              </Reveal>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}

// ----------------------------------------------------------------------

export function Projects() {
  return (
    <Section id="projects" overline="Selected projects" title="Things I've built">
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={project.title}>
            <Reveal delay={index * 100}>
              <Card
                sx={(theme) => ({
                  p: 3,
                  height: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: theme.transitions.create(['transform', 'box-shadow']),
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 24px 48px -12px ${alpha('#000', 0.48)}`,
                  },
                })}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                  <IconBadge icon={<CodeRoundedIcon />} color="secondary" />
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener"
                      variant="body2"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} /> GitHub
                    </Link>
                  )}
                </Stack>
                <Typography variant="subtitle1" component="h3">
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 2, color: 'text.secondary', flexGrow: 1 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                  {project.tags.map((tag) => (
                    <Label key={tag}>{tag}</Label>
                  ))}
                </Stack>
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

// ----------------------------------------------------------------------

export function Skills() {
  return (
    <Section id="skills" overline="Skills" title="Toolbox">
      <Reveal>
        <Card sx={{ p: { xs: 3, md: 4 } }}>
          <Stack divider={<Divider sx={{ borderStyle: 'dashed' }} />} spacing={2.5}>
            {skills.map((group) => (
              <Stack
                key={group.group}
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1.5, md: 3 }}
                alignItems={{ md: 'center' }}
              >
                <Typography variant="subtitle2" sx={{ width: { md: 200 }, flexShrink: 0 }}>
                  {group.group}
                </Typography>
                <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
                  {group.items.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ bgcolor: 'background.neutral' }} />
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Reveal>
    </Section>
  );
}

// ----------------------------------------------------------------------

export function Honors() {
  return (
    <Section id="honors" overline="Honors & languages" title="Awards and achievements">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Reveal>
            <Card sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={2.5}>
                {honors.map((honor) => (
                  <Stack key={honor.text} direction="row" spacing={2} alignItems="flex-start">
                    <Label color="primary" sx={{ mt: 0.25 }}>
                      {honor.year}
                    </Label>
                    <Box>
                      <Typography variant="body2">{honor.text}</Typography>
                      {honor.link && (
                        <Link
                          href={honor.link.url}
                          target="_blank"
                          rel="noopener"
                          variant="caption"
                          sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}
                        >
                          {honor.link.label} <OpenInNewRoundedIcon sx={{ fontSize: 14 }} />
                        </Link>
                      )}
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Reveal>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Reveal delay={100}>
              <Card sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <IconBadge icon={<EmojiEventsOutlinedIcon />} color="warning" />
                  <Box>
                    <Typography variant="h4" component="p">
                      {honors.length}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      honors & certificates
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconBadge icon={<TranslateRoundedIcon />} color="info" />
                  <Typography variant="subtitle1" component="h3">
                    Languages
                  </Typography>
                </Stack>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {languages.map((lang) => (
                    <Box key={lang.name}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle2">{lang.name}</Typography>
                        <Label color={lang.level === 'Native' ? 'primary' : 'info'}>{lang.level}</Label>
                      </Stack>
                      {lang.detail && (
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {lang.detail}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Reveal>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}

// ----------------------------------------------------------------------

export function Footer() {
  const contacts = [
    { icon: <MailOutlineRoundedIcon fontSize="small" />, label: profile.email, href: `mailto:${profile.email}` },
    profile.showPhone && {
      icon: <PhoneOutlinedIcon fontSize="small" />,
      label: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    { icon: <LinkedInIcon fontSize="small" />, label: profile.linkedin.label, href: profile.linkedin.url },
    { icon: <GitHubIcon fontSize="small" />, label: profile.github.label, href: profile.github.url },
  ].filter(Boolean);

  return (
    <Box component="footer" id="contact" sx={{ borderTop: 1, borderColor: 'divider', bgcolor: 'grey.900' }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={4}
        >
          <Box>
            <Typography variant="h4" component="h2">
              Let&apos;s talk
              <Box component="span" sx={{ color: 'primary.main' }}>
                .
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', maxWidth: 420 }}>
              Feel free to reach out by email or connect with me on LinkedIn and GitHub.
            </Typography>
          </Box>
          <Stack spacing={1.5}>
            {contacts.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener"
                color="text.secondary"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, '&:hover': { color: 'primary.light' } }}
              >
                {c.icon}
                <Typography variant="body2" component="span">
                  {c.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Divider sx={{ my: 4 }} />
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </Typography>
      </Container>
    </Box>
  );
}
