import React, { useState} from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import Send from "@material-ui/icons/Send";
// import nodemailer from 'nodemailer';
// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  // const [obj, setObject] = useState({});
  // const [send,setSend] = useState(false);
  
  // const resetForm =()=>{
  //   setObject({})
  // }

  // setTimeout(()=>{
  //   setSend(false)
  // },3000)


  // const handleChange = e => {
  //   setObject({ ...obj, [e.target.name]: e.target.value });
  // }

  // const handelSend = ()=> {
  //   console.log(obj)
   
  //   let data = {
  //     name:obj.name,
  //     email:obj.email,
  //     msg:obj.msg
  //   }

  //   axios.post('/api/forma',data)
  //   .then(res=>{
  //      setSend(true);
  //      resetForm();
  //   }).catch('message not sent')

    
  // }

  

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          {/* <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField onChange={handleChange}
            fullWidth={true}
            name="name"
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField onChange={handleChange}
            fullWidth={true}
            label="Email"
            name="email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField onChange={handleChange}
            fullWidth={true}
            name="msg"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
           <div className={send?'appear':'hide'}>Message has been sent</div>
          <Button onClick={handelSend}
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button> */}
           <Typography variant="h5" className={classes.subHeading}>
            Hire or Contact me...
          </Typography>

          <Typography variant="body1" align="center" className={classes.body1}>
          Phone Number: 0785311513
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           <Typography variant="subtitle1" gutterBottom>
              Email: israaothman11@gmail.com
            </Typography>
          </Typography>

        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
