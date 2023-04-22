# Category.js

* Create a category schema
```js
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("category", CategorySchema)
```
* Create the same schema for post.js, user.js
* Move to README.md (B)
