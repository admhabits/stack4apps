const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const Email = require('./Utils/Email')

// user
const Users = require('./Routes/Users');
const Services = require('./Routes/Services');
const Tema = require('./Routes/Tema');
const Vpn = require('./Routes/Vpn');
const e = require('express');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this func allow users to visit this path 
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/carfile', express.static(path.join(__dirname, 'carfile')))
app.use(express.static(path.join(__dirname, 'react')))

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react', 'index.html'));
  })
} else {
  app.get('/*', (req, res) => {
    const results = { message: "Welcome to development portal application." };
    res.send(JSON.stringify(results, null, 3) + '\n');
  })
}


// API ROUTES
app.use('/api/users', Users);
app.use('/api/services', Services);
app.use('/api/vpn', Vpn);
app.use('/api/tema', Tema);


var key = fs.readFileSync(__dirname + '/certs/server.key');
var cert = fs.readFileSync(__dirname + '/certs/server.cert');
var options = {
  key: key,
  cert: cert
};

var server = https.createServer(options, app);

// PORT
const port = process.env.NODE_PORT || 8080;

// Email();

// run the server 
app.listen(port, "0.0.0.0", () => console.log(`App listen on port ${port}`))

