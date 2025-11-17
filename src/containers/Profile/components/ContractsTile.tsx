/**
 * Contracts Tile Sub-Component
 */

import React from 'react';
import { Box, Chip } from '../../../components/MaterialUI';
import Tile from '../../../components/tile/Tile';
import styles from './SubComponents.module.scss';

interface ContractsTileProps {
  contracts: string[];
}

const ContractsTile: React.FC<ContractsTileProps> = ({ contracts }) => {
  return (
    <Tile profileInfo={{ name: 'Previous Contracts' }}>
      <Box className={styles.contractsContainer}>
        {contracts.map((contract, index) => (
          <Chip
            key={index}
            label={contract}
            variant="filled"
            className={styles.contractChip}
            sx={{
              background: 'linear-gradient(135deg, #1a73e8 0%, #00bcd4 100%)',
              color: 'white',
              fontWeight: 500,
            }}
          />
        ))}
      </Box>
    </Tile>
  );
};

export default ContractsTile;
