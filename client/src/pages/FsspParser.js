import React, {useState, useEffect} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  container: {
    background: theme.colorTertiary,
  },
}));

const axios = require('axios');

const FsspParser = (props) => {
  const theme = useTheme();
  const classes = useStyles({...props, theme});
  const [argString, setArgString] = useState('');
  const [task, setTask] = useState('');
  const [resData, setResData] = useState('');
  // const [textData, setTextData] = useState('');
  // const [onClickStyle, setOnClickStyle] = useState(null);
  // const [presentData, setPresentData] = useState('');
  // const [pastData, setPastData] = useState('');

  // const onSumbmitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(`"Your text ${textData}"`);
  // };
  const onChangeHandler = (event) => {
    setArgString(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(argString);
    const req = argString.split(' ');
    console.log(req);
    axios
      .get('/search/physical', {
        // crossdomain: true,
        params: {
          token: 'DTVVUTs1zL5o',
          region: req[4],
          firstname: req[0],
          secondname: req[1],
          lastname: req[2],
          birthdate: req[3],
        },
      })
      .then((res) => {
        const task = res.data.response.task;
        console.log(task);
        setTask(task);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const onGetResponse = (event) => {
    event.preventDefault();
    if (task !== '') {
      axios
        .get('/result', {
          params: {
            token: 'DTVVUTs1zL5o',
            task: task,
          },
        })
        .then((res) => {
          const data = res.data.response.result[0].result;
          setResData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('task is empty');
    }
  };
  const onGetStatus = (event) => {
    event.preventDefault();
    if (task !== '') {
      axios
        .get('/status', {
          params: {
            token: 'DTVVUTs1zL5o',
            task: task,
          },
        })
        .then((res) => {
          console.log(res.data.status);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('task is empty');
    }
  };

  const data = (
    <div className={classes.container}>
      <h2>FSSP Parser</h2>
      <form>
        <textarea
          className={classes.textarea}
          value={argString}
          onChange={onChangeHandler}
          rows='1'
          cols='100'
        />
        <div>
          <button onClick={onSubmitHandler}>submit</button>
        </div>
        <p>{task}</p>
        <div>
          <button onClick={onGetStatus}>Get Status</button>
        </div>
        <div>
          <button onClick={onGetResponse}>Get Response</button>
        </div>
      </form>
    </div>
  );
  return data;
};
export default FsspParser;
