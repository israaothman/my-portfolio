const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { response } = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
    resizeBy.send('welcome to my forma')
})

app.post('/api/forma',(req,res)=>{
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user:'israaothman11@gmail.com',
            pass:'fedaa1234#',
        }
    });

    let mailOptions={
        from:data.email,
        to:'israaothman11@gmail.com',
        subject:'Message from portfolio',
        html:`
        <h3>informations</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <li>Massage: <p>${data.msg}</p></li>        
        </ul>
        `
    };

    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            res.send(error);
        }else{
            res.send('success')
        }
    })

    smtpTransport.close();
})