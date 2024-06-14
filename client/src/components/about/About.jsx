import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
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

const Wrapper = styled(Box)`
    padding: 40px;
    text-align: center;
    max-width: 800px;
    margin: auto;
`;

const Text = styled(Typography)`
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
`;

const IconWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    & > a {
        margin: 0 15px;
        color: #555;
        transition: color 0.3s;
        &:hover {
            color: #000;
        }
    }
`;

const About = () => {
    return (
        <Box>
            <Banner>
                <BannerText>About Me</BannerText>
            </Banner>
            <Wrapper>
                <Typography variant="h3" gutterBottom>Code for Interview</Typography>
                <Text variant="h5">
                    My name is Harshit Gupta. I am a 3rd year B.Tech student majoring in Computer Science and Engineering
                    at Netaji Subhas University of Technology (formerly NSIT).
                </Text>
                <Text variant="h5">
                    I have a keen interest in the fields of system design, computer hardware and software, web development, computer vision, and machine learning.
                </Text>
                <Text variant="h5">
                    If you are interested, you can view some of my favorite projects here:
                    <Link href="https://github.com/harshit0056" target="_blank">
                        <GitHub fontSize="large" style={{ verticalAlign: 'middle', marginLeft: 5 }} />
                    </Link>
                </Text>
                <Text variant="h5">
                    You can connect with me on LinkedIn:
                    <Link href="https://www.linkedin.com/in/harshit0056" target="_blank">
                        <LinkedIn fontSize="large" style={{ verticalAlign: 'middle', marginLeft: 5 }} />
                    </Link>
                </Text>
                <Text variant="h5">
                    Or follow me on Instagram:
                    <Link href="https://www.instagram.com/harshit0056" target="_blank">
                        <Instagram fontSize="large" style={{ verticalAlign: 'middle', marginLeft: 5 }} />
                    </Link>
                </Text>
                <Text variant="h5">
                    Feel free to reach out via email:
                    <Link href="mailto:harshit@example.com">
                        <Email fontSize="large" style={{ verticalAlign: 'middle', marginLeft: 5 }} />
                    </Link>
                </Text>
                <IconWrapper>
                    <Link href="https://github.com/harshit0056" target="_blank">
                        <GitHub fontSize="large" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/harshit0056" target="_blank">
                        <LinkedIn fontSize="large" />
                    </Link>
                    <Link href="https://www.instagram.com/harshit0056" target="_blank">
                        <Instagram fontSize="large" />
                    </Link>
                    <Link href="mailto:harshit@example.com">
                        <Email fontSize="large" />
                    </Link>
                </IconWrapper>
            </Wrapper>
        </Box>
    );
};

export default About;
