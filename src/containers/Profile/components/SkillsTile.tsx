/**
 * Skills Tile Sub-Component
 */

import React from 'react';
import { Box, Chip, Typography } from '../../../components/MaterialUI';
import Tile from '../../../components/tile/Tile';
import styles from './SubComponents.module.scss';

interface SkillsTileProps {
  skills: string[];
}

const SkillsTile: React.FC<SkillsTileProps> = ({ skills }) => {
  return (
    <Tile profileInfo={{ name: 'Skills' }}>
      <Box className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            className={styles.skillChip}
            sx={{
              borderColor: '#1a73e8',
              color: '#1a1a2e',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'rgba(26, 115, 232, 0.1)',
              },
            }}
          />
        ))}
      </Box>
    </Tile>
  );
};

export default SkillsTile;
