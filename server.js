const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const AccountRoutes = require('./src/routes/Accounts.js')

// Accounts Routes
app.use('/accounts', AccountRoutes)


//404 NOT FOUND
app.use((req,res) => {
  res.send('404 not found')
})

const PORT = 3000;
app.listen(PORT,() => {
  console.log('Listening to the port ',PORT)
})