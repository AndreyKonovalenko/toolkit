import { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  TextareaAutosize,
  Typography
} from '@material-ui/core';

const FsspParserMainForm= (props) => {

  const [argString, setArgString] = useState('');
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const [resData, setResData] = useState(null);
  const [parsedRes, setParsedRes] = useState('');

  const onSaveHandler = (id) => {
    let copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
  };

  const sortText = (data) => {
    if (data !== null) {
      let result = '';
      let totalsum = 0
      if (data.length > 0) {
        data.forEach((element) => {
          const re = /(: \d+)(?:\.(\d{1,2}))?/g; // find all ": 1000.33" in string
          const re2 = /(\d+)(?:\.(\d{1,2}))?/g; // find only nubmers
          const found = element.subject.match(re);
          if (found !== null) {
            const sum = found.map((element) => parseFloat(element.match(re2)));
            let localresult = 0;
            sum.forEach(element => {
              localresult = localresult + element
            });
            console.log(sum);
            console.log(localresult)
            totalsum = totalsum + localresult;
          }
          let ip_stutus = element.ip_end;
          if (ip_stutus === "") {
            ip_stutus = 'действующее'
          }
          else {
            ip_stutus = 'прекращено ' + element.ip_end;
          }
          result = result + element.exe_production + ' / ' + ip_stutus + ' / ' + element.subject + '\n';
        });
      }
      else {
        result = 'ip not fuound !!!'
      }
      const fullresult = result + '\n' + 'всего ' + data.length + " ип на сумму " + totalsum.toFixed(2);
      setParsedRes(fullresult);
    }
    else {
      setParsedRes("there is no response yet!")
    }
  }
  const clearRequestString = () => {
    setArgString('');
  };
  const clearFields = () => {
    setParsedRes('');
    setArgString('');
    setStatus('');
    setTask('');
    setResData(null);
  };

  const getRequestHandler = (dataString) => {
    const req = dataString.split(' ');
    console.log(req);
    const url = '/search/physical'; // exclude app from request path string
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
  };

  const onChangeHandler = (event) => {
    setArgString(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    getRequestHandler(argString);
    // clearRequestString();
  };

  const handleEnterDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      getRequestHandler(argString);
      //  clearRequestString();
    }
  };

  const onGetResponse = (event) => {
    event.preventDefault();
    const url = '/result';
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
          if (data === null) {
            setParsedRes('There is no response yet!');
          }
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
    const url = '/status';
    if (task !== '') {
      axios
        .get(url, {
          params: {
            token: 'DTVVUTs1zL5o',
            task: task,
          },
        })
        .then((res) => {
          setStatus(res.data.status);
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
  };


  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Введите запрос в формате ФИО 11.11.1950 77"
          title="Fssp Parser"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="query string"
            margin="normal"
            name="query string"
            onChange={onChangeHandler}
            onKeyDown={handleEnterDown}
            type="text"
            value={argString}
            variant="outlined"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              p: 2
            }}>
             <Button
              onClick={onSubmitHandler}
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </Box>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              p: 2
            }}>
            <Typography
              color="textSecondary"
              variant="body1"
            > task: {task}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >status: {status}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >response: {resData !== null ? 'received' : ''}
            </Typography>
          </Box>
          <Divider />
             <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              p: 2
            }}>
             <Button
              onClick={onGetStatus}
              color="primary"
              variant="contained"
            >
              Get Status
            </Button>
            <Button
              onClick={onGetResponse}
              color="primary"
              variant="contained"
            >
              Get Resopnse
            </Button>
             <Button
              onClick={onParseResponse}
              color="primary"
              variant="contained"
              disabled={resData === null ? true : false}
            >
              Parse Response
            </Button>
          </Box>
          <Divider />
          <TextareaAutosize
            aria-label="empty textarea"
            id={'result'}
            onSubmit={() => {}}
            onChange={() => {}}
            value={parsedRes}
            color="textSecondary"
            variant="body1"
            placeholder="Empty"
            minRows={10}
            style={{ width: '100%' }}
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => onSaveHandler('result')}
          >
            Save
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={clearFields}
          >
            Clear
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default FsspParserMainForm;