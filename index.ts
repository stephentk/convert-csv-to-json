import express from "express";
import routes from './src/routes/routes';
import csv from 'csvtojson';
const csvfile = './typescript\node.js\csvfile.csv';
const app = express();


app.use('/',routes)

app.get('/convert', (req, res) => {
    const csv = require('csvtojson')
    csv()
    .fromFile('typescript\node.js\csvfile.csv')
    .then((jsonObj: any) => {
        console.log(jsonObj);
    res.send(csv);
})

app.get('/', (req, res) => {
    res.send('Well done!');
})



app.listen(4000, () => {
    console.log('The application is listening on port 3000!')
})