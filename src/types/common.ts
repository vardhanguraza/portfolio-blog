/**
 * Common types and interfaces used across the application
 */

export interface BaseEntity {
  id: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PageProps {
  title?: string;
  description?: string;
}

export interface TileData {
  title: string;
  subtitle?: string;
  icon?: string;
}

export type ThemeMode = 'light' | 'dark';
