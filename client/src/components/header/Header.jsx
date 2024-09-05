import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, styled, Button, Popover, Box, Avatar } from '@mui/material'; 
import { Link } from 'react-router-dom';
import Categories from '../home/Categories'; // Import the Categories component
import { DataContext } from "../../context/DataProvider";
import {PersonalDataContext} from '../../context/PersonalDataProvider';
const Component = styled(AppBar)`
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObuEpyAHN2mmT8BWXeCoMIz_F1kyOdrCJjA&s);
    background-repeat: no-repeat;
    background-size: cover;
    color: black;
`;

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '16px',
    textTransform: 'none',
    '&:hover': {
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

const AccountContainer = styled(Box)`
    display: flex;
    align-items: center;
    & > *:not(:last-child) {
        margin: 8px;
    }
`;

const StyledAvatar = styled(Avatar)`
    margin-right: 8px;
`;

const Header = () => {
    const {personalpost,setPersonalpost }=useContext(PersonalDataContext);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null); // Anchor element for Popover
    const { account } = useContext(DataContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const logout = async () => {
        setPersonalpost(false);
        navigate('/account');
    }

    // Get the initials from the username
    const getInitials = (name) => {
        return name.split(' ')
                   .map(part => part.charAt(0).toUpperCase())
                   .join('');
    };

    const handlprsnlpost=()=>{
        setPersonalpost(!personalpost);
    }

    return (
        <Component>
            <Container>
                <StyledButton onClick={handleClick}>CATEGORIES</StyledButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClick={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
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
                <Button onClick={handlprsnlpost}>
                <AccountContainer>
                    <StyledAvatar>{getInitials(account.username)}</StyledAvatar>
                </AccountContainer>
                </Button>
            </Container>
        </Component>
    );
};

export default Header;
