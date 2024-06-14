import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Button, Popover, Box } from '@mui/material'; 
import { Link } from 'react-router-dom';
import Categories from '../home/Categories'; // Import the Categories component

const Component = styled(AppBar)`
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObuEpyAHN2mmT8BWXeCoMIz_F1kyOdrCJjA&s);
    background-repeat:no-repeat;
    background-size:cover;
    color: black;
`;

const StyledButton = styled(Button)(({ theme }) => ({
    // Customize button styles here
    backgroundColor: theme.palette.primary.main, // Use Material UI theme colors
    color: theme.palette.common.white, // White text
    padding: '10px 20px', // Adjust padding for desired size
    borderRadius: '4px', // Add some border radius
    fontWeight: 'bold', // Make text bold
    fontSize: '16px', // Adjust font size
    textTransform: 'none', // Remove uppercase transformation
    '&:hover': { // Hover styles
      backgroundColor: theme.palette.primary.dark,
    },
  }));

const Container = styled(Toolbar)`
    justify-content: space-between;
`;

const LinksContainer = styled(Box)`
    display: flex;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;


const Header = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null); // Anchor element for Popover

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <StyledButton onClick={handleClick}>CATEGORIES</StyledButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    {/* Content inside the Popover */}
                    <Box p={2}>
                        <Categories />
                    </Box>
                </Popover>

                <LinksContainer>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                    <Link to='/account' onClick={logout}>LOGOUT</Link>
                </LinksContainer>
            </Container>
        </Component>
    );
}

export default Header;
