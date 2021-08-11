import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import FsspParserMainForm from 'src/components/fsspparser/FsspParserMainForm';

const FsspParser = (props) => (
  <>
    <Helmet>
      <title>FsspParser | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ pt: 3 }}>
          <FsspParserMainForm />
        </Box>
      </Container>
    </Box>
  </>
);

<<<<<<< HEAD
let useStyles = createUseStyles((theme) => ({
  container: {
    background: theme.colorTertiary,
  },
}));
const axios = require('axios');
const baseUrl = '';
//const baseUrl = 'https://api-ip.fssp.gov.ru/api/v1.0/';

const FsspParser = (props) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  const [argString, setArgString] = useState('');
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('')
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
  }
  const clearFields = () => {
    setParsedRes("");
    setArgString("")
    setStatus("")
  };

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
    // clearRequestString();
  };


  const handleEnterDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      getRequestHandler(argString);
      //  clearRequestString();
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
          if (data === null) {
            setParsedRes("There is no response yet!")
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
        <p>task: {task}</p>
        <p>status: {status}</p>
        <p>response: {(resData !== null) ?  'received' : ''}</p>
        <div>
          <button onClick={onGetStatus}>Get Status</button>
          <button onClick={onGetResponse}>Get Response</button>
          <button onClick={onParseResponse} disabled={(resData === null) ? true: false}>Parse Response</button>
        </div>
      </form>
        <CustomTextArea
        id={'result'}
        onSubmit={()=>{}}
        onChange={()=>{}}
        value={parsedRes}
        disabled={false}
      />
      <div>
        <button onClick={() => onSaveHandler('result')}>SAVE</button>
        <button onClick={clearFields}>CLEAR</button>
      </div>
    </div>
  );
  return data;
};
=======
>>>>>>> material-ui
export default FsspParser;
