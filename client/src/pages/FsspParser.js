import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  container: {
    background: theme.colorTertiary,
  },
}));
const axios = require('axios');
const baseUrl = '';
//const baseUrl = 'https://api-ip.fssp.gov.ru/api/v1.0/';



const sortText = (data) => {
  data.forEach((element) => {
    let re = /(\d+)(?:\.(\d{1,2}))?/g;
    const found = element.subject.match(re);
    console.log(found);
  });
}



const FsspParser = (props) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  const [argString, setArgString] = useState('');
  const [task, setTask] = useState('');
  const [resData, setResData] = useState('');

  const clearRequestString = () => {
    setArgString('');
  }

  const getRequestHandler = (dataString) => {
    const req = dataString.split(' ');
    console.log(req);
    const url = baseUrl + 'search/physical';
    axios
      .get(url, {
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
  }


  const onChangeHandler = (event) => {
    setArgString(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    getRequestHandler(argString);
    clearRequestString();

  };


  const handleEnterDown = event => {

    if (event.key === 'Enter') {
      event.preventDefault();
      getRequestHandler(argString);
      clearRequestString();
    }
  }

  const onGetResponse = (event) => {
    event.preventDefault();
    const url = baseUrl + '/result';
    if (task !== '') {
      axios
        .get(url, {
          params: {
            token: 'DTVVUTs1zL5o',
            task: task,
          },
        })
        .then((res) => {
          const data = res.data.response.result[0].result;
          setResData(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
      console.log('task is empty');
    }
  };
  const onGetStatus = (event) => {
    event.preventDefault();
    const url = baseUrl + '/status';
    if (task !== '') {
      axios
        .get(url, {
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
    }
    else {
      console.log('task is empty');
    }
  };

  const onParseResponse = (event) => {
    event.preventDefault();
    sortText(resData);

  }

  const data = (
    <div className={classes.container}>
      <h2>FSSP Parser</h2>
      <form>
        <textarea
          className={classes.textarea}
          value={argString}
          onChange={onChangeHandler}
          onKeyDown={handleEnterDown}
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
         <div>
          <button onClick={onParseResponse}>Parse Response</button>
        </div>
      </form>
    </div>
  );
  return data;
};
export default FsspParser;
