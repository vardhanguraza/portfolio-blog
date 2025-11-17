/**
 * Blogs Container Component
 * Main blog page with blog listing and filtering
 */

import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '../../components/MaterialUI';
import BlogCard from './components/BlogCard';
import styles from './Blogs.module.scss';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readTime: number;
  image: string;
  date: string;
}

const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogs: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with TypeScript in React',
      excerpt:
        'Learn how to set up TypeScript in your React project and leverage type safety for better development experience.',
      content: 'Full content here...',
      category: 'TypeScript',
      tags: ['typescript', 'react', 'tutorial'],
      readTime: 8,
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop',
      date: '2025-01-15',
    },
    {
      id: 2,
      title: 'Modern CSS Grid and Flexbox Techniques',
      excerpt:
        'Master the latest CSS layout techniques to create responsive designs that work across all devices.',
      content: 'Full content here...',
      category: 'CSS',
      tags: ['css', 'layout', 'responsive'],
      readTime: 10,
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=200&fit=crop',
      date: '2025-01-10',
    },
    {
      id: 3,
      title: 'State Management with React Hooks',
      excerpt:
        'Deep dive into custom hooks and context API for managing complex application state in modern React.',
      content: 'Full content here...',
      category: 'React',
      tags: ['react', 'hooks', 'state-management'],
      readTime: 12,
      image:
        'https://images.unsplash.com/photo-1627398242454-45a570e2c1d7?w=400&h=200&fit=crop',
      date: '2025-01-08',
    },
    {
      id: 4,
      title: 'Building Scalable APIs with Node.js',
      excerpt:
        'Best practices for designing and building high-performance, scalable REST APIs using Node.js and Express.',
      content: 'Full content here...',
      category: 'Backend',
      tags: ['nodejs', 'api', 'backend'],
      readTime: 15,
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop',
      date: '2025-01-05',
    },
  ];

  const categories = ['all', ...new Set(blogs.map((blog) => blog.category))];
  const filteredBlogs =
    selectedCategory === 'all'
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <Box component="main" className={styles.blogsContainer}>
      <Box className={styles.heroSection}>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" className={styles.pageTitle}>
            Latest Articles & Insights
          </Typography>
          <Typography variant="body1" className={styles.subtitle}>
            Exploring web development, design patterns, and modern technologies
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className={styles.contentSection}>
        {/* Filter Section */}
        <Box className={styles.filterSection}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 700 }}>
            Filter by Category
          </Typography>
          <Box className={styles.categoryButtons}>
            {categories.map((category) => (
              <Box
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.active : ''
                }`}
                sx={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor:
                    selectedCategory === category ? '#1a73e8' : '#e5e7eb',
                  backgroundColor:
                    selectedCategory === category
                      ? 'rgba(26, 115, 232, 0.1)'
                      : 'transparent',
                  color:
                    selectedCategory === category ? '#1a73e8' : '#6b7280',
                  fontWeight: selectedCategory === category ? 600 : 500,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'capitalize',
                  '&:hover': {
                    borderColor: '#1a73e8',
                    color: '#1a73e8',
                  },
                }}
              >
                {category}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Blog Grid */}
        <Grid container spacing={3}>
          {filteredBlogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <BlogCard
                title={blog.title}
                excerpt={blog.excerpt}
                category={blog.category}
                tags={blog.tags}
                readTime={blog.readTime}
                image={blog.image}
                date={blog.date}
                onRead={() => console.log(`Reading: ${blog.title}`)}
              />
            </Grid>
          ))}
        </Grid>

        {filteredBlogs.length === 0 && (
          <Box className={styles.emptyState}>
            <Typography variant="h6" color="textSecondary">
              No articles found in this category
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Blogs;
