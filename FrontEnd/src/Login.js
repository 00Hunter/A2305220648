import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ApiClient from './ApiClient';

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  },
  inputField: {
    marginBottom: '10px',
  },
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authtoken,setAuth]=useState();
  const auth=ApiClient.auth();
  const classes = useStyles();


  const handleSubmit = async(e) => {
    e.preventDefault();
    
   const result=await ApiClient.auth(e);
    if(result.status()!=200){
        console.log("Logi Failed")    
    }
    setAuth(result.data);
  };

  return (
    <div>
      <h2>Login</h2>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          className={classes.inputField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          className={classes.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
