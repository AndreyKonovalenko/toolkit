import React, { useState } from 'react';
import CustomTextArea from '../components/CustomTextArea';
import { createUseStyles, useTheme } from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  container: {
    background: theme.colorTertiary,
  },
}));

const TextSorter = (props) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
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
    setOnClickStyle({ outlineColor: theme.colorPrimary });
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
    myArr.forEach(function(element) {
      element = element.replaceAll(/\t/g, ' ');
      let re = /\(/g;
      if (element.search(re) !== -1) {
        if (element !== '') {
          pastResult = pastResult + element + '\n';
        }
      }
      else {
        if (element !== '') {
          presentResult = presentResult + element + '\n';
        }
      }
    });
    setPresentData(presentResult);
    setPastData(pastResult);
  };
  const data = (
    <div className={classes.container}>
      <h2>Please Enter data in textfield below!!!</h2>
      <CustomTextArea
        id={'input'}
        value={textData}
        onSubmit={onSumbmitHandler}
        onChange={onChangeHandler}
        overrideStyle={onClickStyle}
        onFocus={onFocusHander}
        disabled={false}
      />
      <div>
        <button onClick={() => sortText(textData)}>SORT</button>
        <button onClick={clearFields}>CLEAR</button>
      </div>
      <h2>Present</h2>
      <CustomTextArea
        id={'present'}
        value={presentData}
        onSubmit={onSumbmitHandler}
        onChange={onChangeHandler}
        overrideStyle={onClickStyle}
        onFocus={onFocusHander}
        disabled={false}
      />
      <div>
        <button onClick={() => onSaveHandler('present')}>SAVE</button>
      </div>
      <h2>Past</h2>
      <CustomTextArea
        id={'past'}
        value={pastData}
        onSubmit={onSumbmitHandler}
        onChange={onChangeHandler}
        overrideStyle={onClickStyle}
        onFocus={onFocusHander}
        disabled={false}
      />
      <div>
        <button onClick={() => onSaveHandler('past')}>SAVE</button>
      </div>
    </div>
  );
  return data;
};
export default TextSorter;
