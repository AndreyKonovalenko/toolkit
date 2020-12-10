import React, { useState, useEffect } from 'react';
import InputTextForm from '../components/InputTextForm';
import { createUseStyles, useTheme } from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  container: {
    background: theme.colorPrimary,
  },
}));

//import Colors from '../constants/Colors';

const Main = (props) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  const [textData, setTextData] = useState('paste text data here');

  const printIt = () => {
    console.log('Hello world!');
  };

  const onSumbmitHandler = (event) => {
    event.preventDefault();
    console.log(`"Your text ${textData}"`);
  };
  const onChangeHandler = (event) => {
    setTextData(event.target.value);
  };

  useEffect(() => {
    console.log(textData);
  });
  // function sortText() {
  //   let y = document.getElementById("inputArea").value
  //   let presentOutput = document.getElementById("presentArea");
  //   let pastOutput = document.getElementById("pastArea")
  //   let myArr = y.split(/\n/g);
  //   const br = document.createElement("br")
  //   let presentResult = ""
  //   let pastResult = ""
  //   myArr.forEach(function(element) {
  //     element = element.replaceAll(/\t/g, " ")
  //     let re = /\(/g
  //     if (element.search(re) != -1) {
  //       if (element != "") {
  //         pastResult = pastResult + element + "\n"
  //       }
  //     }
  //     else {
  //       if (element != "") {
  //         presentResult = presentResult + element + "\n"
  //       }
  //     }
  //   })
  //   presentOutput.innerHTML = presentResult
  //   pastOutput.innerHTML = pastResult

  const data = (

    <div className={classes.container}>
            <InputTextForm
              value={textData}
              onSubmit={onSumbmitHandler}
              onChange={onChangeHandler}
            />
            <textarea
              id='inputArea'
              name='test'
              rows='10'
              cols='100'
            ></textarea>
            <div>
              <button onClick={printIt}>Do it</button>
              <button onClick='resetFields()'>Reset</button>
            </div>
            <form onSubmit={() => {}}>
              <label>
                Essay:
                <textarea value='' onChange={() => {}} />
              </label>
              <input type='submit' value='Submit' />
              <input type='reset' value='reset' />
            </form>
            <div>
              <h2>Present</h2>
              <textarea
                id='presentArea'
                name='test'
                rows='10'
                cols='100'
              ></textarea>
              <h2>Past</h2>
              <textarea
                id='pastArea'
                name='test'
                rows='10'
                cols='100'
              ></textarea>
            </div>
          </div>

  );
  return data;
};
export default Main;
