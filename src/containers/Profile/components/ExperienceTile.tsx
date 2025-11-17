/**
 * Experience Tile Sub-Component
 */

import React from 'react';
import { Box, Typography } from '../../../components/MaterialUI';
import Tile from '../../../components/tile/Tile';
import styles from './SubComponents.module.scss';

interface ExperienceTileProps {
  years: number;
  description?: string;
}

const ExperienceTile: React.FC<ExperienceTileProps> = ({ years, description }) => {
  return (
    <Tile profileInfo={{ name: 'Experience' }}>
      <Box className={styles.experienceContainer}>
        <Box className={styles.yearsDisplay}>
          <Typography variant="h3" component="span" sx={{ fontWeight: 700, color: '#1a73e8' }}>
            {years}+
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', marginTop: 1 }}>
            Years of Experience
          </Typography>
        </Box>
        {description && (
          <Typography variant="body2" sx={{ marginTop: 2, color: '#1a1a2e', lineHeight: 1.6 }}>
            {description}
          </Typography>
        )}
      </Box>
    </Tile>
  );
};

export default ExperienceTile;
