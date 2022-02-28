const {dbData, Card, Suit, Face} = require('./db') // importing db from db.js file
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
                include: [Suit,Face]
            })
        ]);
        res.send(cards)
    } catch (error) {
        console.log(error)
    }
})

app.get('/faces/:id', async (req, res, next) => {
    try {
        const face = await Face.findByPk(req.params.id);
        res.send([face]);
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
app.use('/PNG-cards-1.3', express.static(path.join(__dirname, '/PNG-cards-1.3')))