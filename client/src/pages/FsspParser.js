import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import FsspParserMainForm from 'src/components/fsspparser/FsspParserMainForm';


const FsspParser = (props) => (
   <>
  <Helmet>
      <title>FsspParser | Material Kit</title>
  </Helmet>
    <Box sx = {
    {
      backgroundColor: 'background.default',
      minHeight: '100%',
      py: 3
    }
  } >
  <Container maxWidth="lg">
        <Box sx={{ pt: 3 }}>
          <FsspParserMainForm />
        </Box>
      </Container>
      </Box>
  </>
);

export default FsspParser;
