# MERN Stack

## Pre-Requisites

* npm init - create the package.json
* intall the important modules - dotenv, express, mongoose, path etc
* *package.json* - "start": "nodemon index.js" -  starts a Node.js server and watches for changes in the index.js file. Remove the test line from package.json

create index.js
create .env
create model -> routes (inside model)

## Index.js

* import modules 
* listen app and test the console
```js
app.listen("5000",() => {
    console.log("backend running")
})
```

## Troubleshooting

Q. 'nodemon' is not recognized as an internal or external command

A. npm install -g nodemon 
