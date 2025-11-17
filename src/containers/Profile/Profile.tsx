/**
 * Profile Container Component
 * Main profile page with hero section and detail tiles
 */

import React from 'react';
import { Box, Container, Grid } from '../../components/MaterialUI';
import Tile from '../../components/tile/Tile';
import SkillsTile from './components/SkillsTile';
import ExperienceTile from './components/ExperienceTile';
import ContractsTile from './components/ContractsTile';
import styles from './Profile.module.scss';

const Profile: React.FC = () => {
  const profileInfo = {
    name: 'John Doe',
    bio: 'Full-Stack Developer | Creative Problem Solver',
    imageSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    email: 'john.doe@example.com',
    link: 'https://example.com/johndoe',
  };

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'CSS/SCSS',
    'Material-UI',
    'REST APIs',
    'Git',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'AWS',
  ];

  const experience = {
    years: 5,
    description: 'Specialized in building scalable web applications and modern user interfaces.',
  };

  const contracts = ['Company A', 'Company B', 'Company C', 'Freelance Projects'];

  return (
    <Box component="main" className={styles.profileContainer}>
      <Box className={styles.heroSection}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="stretch">
            {/* Profile Tile - Left Column */}
            <Grid item xs={12} md={6} className={styles.profileTileWrapper}>
              <Tile profileInfo={profileInfo} elevation={2}>
                <Box sx={{ marginTop: 2 }}>
                  <p style={{ color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
                    I'm a passionate developer dedicated to creating beautiful, functional web
                    experiences. Specializing in modern React and TypeScript, I build scalable
                    solutions that solve real-world problems.
                  </p>
                </Box>
              </Tile>
            </Grid>

            {/* Details Column - Right Column */}
            <Grid item xs={12} md={6} className={styles.detailsColumn}>
              <Box className={styles.detailsStack}>
                <SkillsTile skills={skills} />
                <ExperienceTile years={experience.years} description={experience.description} />
                <ContractsTile contracts={contracts} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Profile;
