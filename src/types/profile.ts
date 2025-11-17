/**
 * Profile-related type definitions
 */

import { BaseEntity } from './common';

export interface ProfileInfo extends BaseEntity {
  name: string;
  bio: string;
  imageSrc?: string;
  email?: string;
  phone?: string;
  location?: string;
  link?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}

export interface Skill extends BaseEntity {
  name: string;
  category?: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Experience extends BaseEntity {
  title: string;
  company: string;
  years: number;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
}

export interface Contract extends BaseEntity {
  name: string;
  role?: string;
  description?: string;
  duration?: string;
  link?: string;
}

export interface ProfileData {
  profile: ProfileInfo;
  skills: Skill[];
  experiences: Experience[];
  contracts: Contract[];
}
