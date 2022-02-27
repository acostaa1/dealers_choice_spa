const {dbData, Card, Suit} = require('./db') // importing db from db.js file
const express = require('express');
const app = express();
const path = require('path')

const setUp = async () => {
    try {
        await dbData(); // syncs my data from db
        console.log('connected to db!')

        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

setUp()

// *** PHASE TWO - SETTING UP EXPRESS ***//
app.get('/cards', async (req, res, next) => {
    try {
        const [cards, suits] = await Promise.all([
            Card.findAll({
                include: [Suit]
            })
        ]);
        res.send(cards)
    } catch (error) {
        console.log(error)
    }
})

// *** PHASE THREE - FRONT END ** // 

//setting up route to get html
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//setting up route to connect to client side index.js
app.use('/src', express.static(path.join(__dirname, 'src')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))