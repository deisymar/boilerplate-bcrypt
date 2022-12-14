'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
/*test #12 BCrypt Hashes*/
let bcrypt = require('bcrypt')

fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
/*test #13 hash async*/
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      /*res == true or false*/
        console.log(res);
    });
});

//END_ASYNC

//START_SYNC

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
var result = bcrypt.compareSync(myPlaintextPassword, hash);

//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
