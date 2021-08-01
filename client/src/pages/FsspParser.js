import React, {useState} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  container: {
    background: theme.colorTertiary,
  },
}));

const FsspParser = (props) => {
  const theme = useTheme();
  const classes = useStyles({...props, theme});
  // const [textData, setTextData] = useState('');
  // const [onClickStyle, setOnClickStyle] = useState(null);
  // const [presentData, setPresentData] = useState('');
  // const [pastData, setPastData] = useState('');

  // const onSumbmitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(`"Your text ${textData}"`);
  // };
  // const onChangeHandler = (event) => {
  //   setTextData(event.target.value);

  //   console.log(event.target.value);
  // };

  // const onFocusHander = () => {
  //   setOnClickStyle({outlineColor: theme.colorPrimary});
  // };

  // const clearFields = () => {
  //   setPresentData('');
  //   setPastData('');
  //   setTextData('');
  // };

  const data = (
    <div className={classes.container}>
      <h2>HTML Forms</h2>
      <form>
        <label for={'fname'}>First name:</label>
        <input type={'text'} id={'fname'} name={'fname'} value={'John'} />
        <label for={'lname'}>Last name:</label>
        <input type={'text'} id={'lname'} name={'lname'} value={'Doe'} />
        <input type={'submit'} value={'Submit'} />
      </form>
    </div>
  );
  return data;
};
export default FsspParser;
