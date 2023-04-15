# Index.js

* import modules 
* listen app and test the console
```js
app.listen("5000",() => {
    console.log("backend running")
})
```
* Connect mongoose
```js
mongoose.
    connect(process.env.CONNECT_URL, {
        useNewUrlParser: true,
        UseUnifiedTopology: true
    })
    .then(console.log("Connected to Mongoose"))
    .catch((err) => console.log(err))
```
