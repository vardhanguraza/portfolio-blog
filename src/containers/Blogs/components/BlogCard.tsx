/**
 * Blog Card Component
 * Individual blog post card with modern styling
 */

import React from 'react';
import { Card, CardContent, CardActions, Button, Box, Typography, Chip } from '../../../components/MaterialUI';
import styles from './BlogCard.module.scss';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category?: string;
  tags?: string[];
  readTime?: number;
  image?: string;
  date?: string;
  onRead?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  tags = [],
  readTime,
  image,
  date,
  onRead,
}) => {
  return (
    <Card className={styles.blogCard}>
      {image && (
        <Box
          className={styles.blogImage}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <CardContent className={styles.cardContent}>
        <Box className={styles.header}>
          {category && (
            <Chip
              label={category}
              size="small"
              sx={{
                background: 'linear-gradient(135deg, #1a73e8 0%, #00bcd4 100%)',
                color: 'white',
                fontWeight: 500,
                height: '24px',
              }}
            />
          )}
          {readTime && (
            <Typography variant="caption" color="textSecondary">
              {readTime} min read
            </Typography>
          )}
        </Box>

        <Typography variant="h5" component="h3" className={styles.title}>
          {title}
        </Typography>

        <Typography variant="body2" color="textSecondary" className={styles.excerpt}>
          {excerpt}
        </Typography>

        {tags.length > 0 && (
          <Box className={styles.tags}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={`#${tag}`}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: '#1a73e8',
                  color: '#1a73e8',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                }}
              />
            ))}
          </Box>
        )}

        {date && (
          <Typography variant="caption" color="textSecondary" sx={{ display: 'block', marginTop: 1 }}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={onRead}
          sx={{
            color: '#1a73e8',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'rgba(26, 115, 232, 0.1)',
            },
          }}
        >
          Read More →
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
