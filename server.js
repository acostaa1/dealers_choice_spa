const {dbData } = require('./db') // importing db from db.js file
 

const setUp = async () => {
    try {
        await dbData(); // syncs my data from db
        console.log('connected to db...')

        const port = process.env.PORT || 3000;
        //app.listen(port, ()=> console.log(`listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

setUp()