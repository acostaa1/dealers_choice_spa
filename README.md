Phase Zero Setup
    install dependencies
    server.js
    nodemon script
    start:dev
Phase One Database
    set up a Sequelize instance (sequelize)
    run sync (to make sure you connect)
    create a model of your choice with properties of your choice
    seed some data
Phase Two Setup Express
    create a GET api route for your model
    Phase Three Front End
    set up a route which returns an index.html page
    add a /src/index.js which will have your client side code
    a console.log 'hello world will do'
    add a static route for which will enable files to be served from the src/ folder
    the GET / route should return the index.html which has a script tag for the client side file
Phase Four Load Data With Axios
    add another script tag which will load the axios cdn file
    on the client, load the data from your server, and render it
    Phase Five - Destroy
    add the ability to delete an item from the client
    it should delete the item on the server
    and re-render the items
Phase n++ extra credit
    add the ability to insert an item
    add constraints on your model and handle errors
    add a class method to your model
    add a virtual field to your model