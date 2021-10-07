import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import TextFormaterCard from 'src/components/textsorter/TextFormaterCard';

const TextFormater = () => {
  return (
    <>
      <Helmet>
        <title>TextFormater | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}>
        <Container maxWidth='lg'>
          <Box sx={{ pt: 3 }}>
            <TextFormaterCard />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default TextFormater;
