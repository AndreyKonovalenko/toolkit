import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  TextField,
  TextareaAutosize,
  Typography,
} from '@material-ui/core';

const TextSorterForm = (props) => {
  const [textData, setTextData] = useState('');
  const [onClickStyle, setOnClickStyle] = useState(null);
  const [presentData, setPresentData] = useState('');
  const [pastData, setPastData] = useState('');

  const onSumbmitHandler = (event) => {
    event.preventDefault();
    console.log(`"Your text ${textData}"`);
  };
  const onChangeHandler = (event) => {
    setTextData(event.target.value);

    console.log(event.target.value);
  };

  const onFocusHander = () => {
    setOnClickStyle({ outlineColor: 'grey' });
  };

  const clearFields = () => {
    setPresentData('');
    setPastData('');
    setTextData('');
  };

  const onSaveHandler = (id) => {
    let copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
  };

  const sortText = (data) => {
    let myArr = data.split(/\n/g);
    let presentResult = '';
    let pastResult = '';
    myArr.forEach(function (element) {
      element = element.replaceAll(/\t/g, ' ');
      let re = /\(/g;
      if (element.search(re) !== -1) {
        if (element !== '') {
          pastResult = pastResult + element + '\n';
        }
      } else {
        if (element !== '') {
          presentResult = presentResult + element + '\n';
        }
      }
    });
    setPresentData(presentResult);
    setPastData(pastResult);
  };

  return (
    <Card>
    <CardHeader
        subheader='Введите текс который нужно отформатировать'
        title='TextFormater'
      />
      <Divider />
      <CardContent>
      <TextareaAutosize
        aria-label='input'
        color='textSecondary'
        id={'input'}
        value={textData}
        minRows={10}
        onSubmit={onSumbmitHandler}
        onChange={onChangeHandler}
        overrideStyle={onClickStyle}
        onFocus={onFocusHander}
        style={{ width: '100%' }}
        placeholder='Empty'
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 2,
        }}>
          <Button onClick={() => sortText(textData)} color='primary' variant='contained'>SORT</Button>
          <Button onClick={clearFields} color='primary' variant='contained'>CLEAR</Button>
      </Box>
      <Typography color='textSecondary' variant='body1'>Present</Typography>
      <TextareaAutosize
        aria-label='present'
        color='textSecondary'
        id={'present'}
        value={presentData}
        minRows={10}
        onSubmit={onSumbmitHandler}
        onChange={onChangeHandler}
        onFocus={onFocusHander}
        style={{ width: '100%' }}
        placeholder='Empty'
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 2,
        }}>
        <Button onClick={() => onSaveHandler('present')}>SAVE</Button>
      </Box>
      <Typography color='textSecondary' variant='body1'>Past</Typography>
      <TextareaAutosize
        aria-label='past'
        color='textSecondary'
        id={'past'}
        value={pastData}
        minRows={10}
        onSubmit={onSumbmitHandler}
        onChange={onChangeHandler}
        style={{ width: '100%' }}
        placeholder='Empty'
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 2,
        }}>
        <Button onClick={() => onSaveHandler('past')}>SAVE</Button>
      </Box>
      </CardContent>
    </Card>
  );
};
export default TextSorterForm;
