const {dbData, Card, Suit} = require('./db') // importing db from db.js file
const express = require('express');
const app = express();

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
app.get('/', async (req, res, next) => {
    try {
        const [suits] = await Promise.all([
            Suit.findAll({
                include: [Card]
            })
        ]);
        res.send({suits})
    } catch (error) {
        console.log(error)
    }
})