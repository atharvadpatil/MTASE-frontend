import * as React from 'react';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import Link from '@mui/material/Link';

const pages = ['Summarize & Analyze', 'Approach'];
const page_link = ['/summarize', '/approach'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/" underline="none" color="inherit" sx={{ mr: 10, display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            style={{ backgroundColor: "white" }}
                            sx={{ p: 0, mr: 1, ml: 1 }}
                        >
                            <PsychologyTwoToneIcon color="primary" fontSize="large" />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            color="inherit"
                            component="div"
                        >
                            MTASE
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                            {pages.map((page, key) => (
                                <Link href={page_link[key]} underline="none" color="inherit" key={key}>
                                    <MenuItem>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Link href="/" underline="none" color="inherit" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Typography
                            variant="h6"
                            noWrap
                            color="inherit"
                            component="div"
                            sx={{ mr: 2 }}
                        >
                            MTASE
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, key) => (
                            <Button
                                key={key}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mr: 5, color: 'white', display: 'block' }}
                                href={page_link[key]}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;