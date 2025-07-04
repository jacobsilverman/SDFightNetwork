// src/components/NavBar.tsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import ColorModeSwitcher from '../shared/ColorModeSwitcher';
import './Header.scss';

const desktopNavItems = ['Home', 'Videos', 'Fighters', 'Trainers', 'Locations', 'Equipment', 'About', 'Contact', 'Privacy'];
const mobileNavItems = ['Home', 'Videos', 'Fighters', 'Trainers', 'Locations', 'Equipment', 'About', 'Contact', 'Privacy'];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveTab = (item) => {
    const path = location.pathname;
    if (item.toLowerCase() === 'home') {
      return path === '/' || path === '/Home';
    }
    return path.toLowerCase() === `/${item.toLowerCase()}`;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" className="home-name-link">SD Fight <span>Network</span></Link>
      </Typography>
      <List>
        {mobileNavItems.map((item) => (
          <ListItem
            button
            key={item}
            component={Link}
            to={`/${item.toLowerCase()}`}
            className={isActiveTab(item) ? 'active' : ''}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="fixed" className="nav-bar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            className="home-name"
          >
            <Link to="/" className="home-name-link">SD Fight <span>Network</span></Link>
          </Typography>
          <Box 
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} 
            className="nav-tabs-container"
          >
            {desktopNavItems.map((item) => (
              <Link 
                to={`/${item}`} 
                key={item} 
                sx={{ color: '#fff' }} 
                className={`nav-tab ${isActiveTab(item) ? 'active' : ''}`}
              >
                {item}
              </Link>
            ))}
          </Box>
          <Box sx={{ ml: 2, display: { xs: 'block' } }}>
            <ColorModeSwitcher />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;