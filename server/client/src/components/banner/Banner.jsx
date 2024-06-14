import React from 'react';
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
  width: 100%;
  height: 50vh;
  background: url(https://us.123rf.com/450wm/kjekol/kjekol1711/kjekol171100055/90014878-laptop-and-office-supplies-at-dark-gray-desk.jpg?ver=6) center/55% repeat-x #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #FFFFFF;
  line-height: 1;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG ASPIRE</Heading>
    </Image>
  );
};

export default Banner;
