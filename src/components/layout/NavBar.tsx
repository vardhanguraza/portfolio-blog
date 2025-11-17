/**
 * Navigation Bar Component
 * Modern responsive navbar with smooth transitions
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuIcon,
  Container,
  Button,
  Avatar,
  Tooltip,
  MenuItem,
} from '../MaterialUI';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const pages = ['Profile', 'Projects', 'Blog', 'Connect'];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (page: string) => {
    const path = page === 'Profile' ? '/' : `/${page.toLowerCase()}`;
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" className={styles.navBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo - Desktop */}
          <Box
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '1.5rem',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.1rem',
              }}
            >
              {'<Dev />'}
            </Typography>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar-nav"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar-nav"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleNavigate(page)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(26, 115, 232, 0.1)',
                    },
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '1.25rem',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {'<Dev />'}
            </Typography>
          </Box>

          {/* Desktop Navigation Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(page)}
                sx={{
                  color: 'white',
                  position: 'relative',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    bottom: '8px',
                    left: '50%',
                    backgroundColor: '#f5576c',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover:after': {
                    width: '80%',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Your Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Profile"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  sx={{
                    width: 40,
                    height: 40,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
