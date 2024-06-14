import { Box, styled, Typography, Link, TextField, Button } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';
import { API } from '../../service/api';
import { useState } from 'react';

const Banner = styled(Box)`
    background-image: url(https://as2.ftcdn.net/v2/jpg/04/61/19/51/1000_F_461195176_d0cn4knTDRv1sTtCqhuTYuw9lkvQY46v.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BannerText = styled(Typography)`
    color: white;
    font-size: 3rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px 40px;
    border-radius: 10px;
`;

const ContactButton = styled(Button)`
    margin-top:1vh;
    text-transform: none;
    background: #2874f0;
    color: #fff;
    height: 48px;
    border-radius: 25px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    &:hover {
        background: #2058c0;
    }
`;

const Wrapper = styled(Box)`
    padding: 40px;
    max-width: 600px;
    margin: auto;
    margin-top: 7vh;
    margin-bottom: 7vh;
    background-color: rgba(249, 249, 249, 0.6); /* Adjust the alpha value (0.9) for transparency */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Text = styled(Typography)`
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
`;

const StyledTextField = styled(TextField)`
    margin-top: 20px;
    width: 100%;
`;

const Contact = () => {
    const initialContacts = {
        email: '',
        phone: '',
        city: '',
        state: ''
    };

    const [contact, setContact] = useState(initialContacts);
    const [submitted, setSubmitted] = useState(false); 

    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    const UserContact = async () => {
        try {
            let response = await API.userContact(contact);
            if (response.isSuccess) {
                setContact(initialContacts);
                setSubmitted(true);
            } else {
                console.log('Something went wrong! Please try again later.');
            }
        } catch (error) {
            console.error('Error while contacting user:', error);
        }
    }

    return (
        <Box>
            <Banner>
                <BannerText>Contact Me</BannerText>
            </Banner>
            {submitted ? (
                <Wrapper>
                    <Typography variant="h4">Thank you for contacting me!</Typography>
                    <br></br>
                    <Text variant="h6">
                        You can connect with me on Instagram
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank" style={{ marginLeft: 5 }}>
                            <Instagram />
                        </Link>
                        or send me an Email
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit" style={{ marginLeft: 5 }}>
                            <Email />
                        </Link>.
                    </Text>
                </Wrapper>
            ) : (
                <Wrapper>
                    <Typography variant="h4">Let's Build Together!</Typography>
                    <br></br>
                    <Text variant="h6">
                        You can connect with me on Instagram
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank" style={{ marginLeft: 5 }}>
                            <Instagram />
                        </Link>
                        or send me an Email
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit" style={{ marginLeft: 5 }}>
                            <Email />
                        </Link>.
                        <br /><br />
                        Let's work together on some great projects and grow together. Please fill in the details below, and I will get back to you soon.
                    </Text>
                    <StyledTextField 
                        variant="outlined" 
                        onChange={onInputChange} 
                        name='email' 
                        label='Email' 
                        value={contact.email} 
                    />
                    <StyledTextField 
                        variant="outlined" 
                        onChange={onInputChange} 
                        name='phone' 
                        label='Phone' 
                        value={contact.phone} 
                    />
                    <StyledTextField 
                        variant="outlined" 
                        onChange={onInputChange} 
                        name='city' 
                        label='City' 
                        value={contact.city} 
                    />
                    <StyledTextField 
                        variant="outlined" 
                        onChange={onInputChange} 
                        name='state' 
                        label='State' 
                        value={contact.state} 
                    />
                    <ContactButton onClick={UserContact}>Contact</ContactButton>
                </Wrapper>
            )}
        </Box>
    );
}

export default Contact;
