const express = require('express')
const mongoose = require('mongoose')

const productRoute = require('./routes/product')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:1234@cluster0.wvla5qq.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connection successful'))
    .catch((err) => console.error(err))

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({ stats: true, message: 'Successful' })
})
app.use('/products', productRoute);

app.listen(8000, () => console.log(`Server listening at: http://localhost:8000`))