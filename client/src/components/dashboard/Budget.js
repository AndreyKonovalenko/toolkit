import React from 'react';
import axios from 'axios';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';



// HTTP requests AXIOS --------------------------------------------------------------------------------
  const getExchangeRate = () => {
    axios
      .get("https://rest.coinapi.io/v1/exchangerate/ETH/USD", {
         headers: {"X-CoinAPI-Key": 'D6A3948D-7D78-431E-920B-B569EF17F04D'},
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // EVENT HANDLERS ---------------------


  const onGetExchangeRateHandler = (event) => {
    event.preventDefault();
    getExchangeRate();
  };


const Budget = (props) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color='textSecondary' gutterBottom variant='h6'>
            BUDGET
          </Typography>
          <Typography color='textPrimary' variant='h3'>
            $24,000
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56,
            }}>
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center',
        }}>
        <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1,
          }}
          variant='body2'>
          12%
        </Typography>
           <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              p: 2,
            }}>
            <Button
              onClick={onGetExchangeRateHandler}
              color='primary'
              variant='contained'>
              Submit
            </Button>
            </Box>
        <Typography color='textSecondary' variant='caption'>
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Budget;
