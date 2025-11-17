/**
 * Blog-related type definitions
 */

import { BaseEntity } from './common';

export interface BlogPost extends BaseEntity {
  title: string;
  slug?: string;
  content: string;
  excerpt?: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: string;
  readTime?: number;
  published: boolean;
  publishedDate?: Date;
}

export interface BlogCategory extends BaseEntity {
  name: string;
  slug?: string;
  description?: string;
  color?: string;
}

export type BlogSortBy = 'date' | 'title' | 'readTime';
export type BlogSortOrder = 'asc' | 'desc';

export interface BlogFilters {
  category?: string;
  tags?: string[];
  search?: string;
  sortBy?: BlogSortBy;
  sortOrder?: BlogSortOrder;
}
