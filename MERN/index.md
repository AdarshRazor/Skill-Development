# Index.js

* import modules 
* listen app and test the console
```js
app.listen("5000",() => {
    console.log("backend running")
})
```
* start the server `npm start`
* Connect mongoose
```js
mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        UseUnifiedTopology: true
    })
    .then(console.log("Connected to Mongoose"))
    .catch((err) => console.log(err))
```
* dotenv package in Node.js that loads environment variables from a .env file into the Node.js process environment.
```js
const dotenv = require('dotenv');
dotenv.config();
```
