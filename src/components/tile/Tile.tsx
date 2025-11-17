/**
 * Tile Component - Reusable card component with profile info
 * Modern 2025 design with smooth animations
 */

import React from 'react';
import { Card, CardContent, Box, Typography } from '../MaterialUI';
import styles from './Tile.module.scss';

interface ProfileInfo {
  name: string;
  bio?: string;
  imageSrc?: string;
}

interface TileProps {
  profileInfo?: ProfileInfo;
  children?: React.ReactNode;
  elevation?: number;
}

const Tile: React.FC<TileProps> = ({ profileInfo, children, elevation = 1 }) => {
  return (
    <Card elevation={elevation} className={styles.tileCard}>
      <CardContent>
        <Box className={styles.tileContent}>
          {profileInfo && (
            <Box className={styles.profileInfo}>
              {profileInfo.imageSrc && (
                <img
                  className={styles.profileImage}
                  src={profileInfo.imageSrc}
                  alt={profileInfo.name}
                />
              )}
              <Box className={styles.profileDetails}>
                <Typography variant="h5" component="h3">
                  {profileInfo.name}
                </Typography>
                {profileInfo.bio && (
                  <Typography variant="body2" color="textSecondary">
                    {profileInfo.bio}
                  </Typography>
                )}
              </Box>
            </Box>
          )}
          {children && (
            <Box className={styles.additionalContent}>{children}</Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tile;
