// *** PHASE ONE - SETTING UP DB AND SEEDING DATA *** //
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/deck_of_cards"
); //process.env is when deploying

//define my models (aka tables) here
const Card = sequelize.define('card', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Suit = sequelize.define('suit', {
    name: {
        type: Sequelize.ENUM('Spades', 'Diamonds', 'Clubs', 'Hearts'),
        allowNull: false,
        unique: true
    },
    color: {
        type: Sequelize.ENUM('Red', 'Black'),
        allowNull: false
    }
})

// associations
Card.belongsTo(Suit)

const dbData = async () => {
  await sequelize.sync({ force: true }); // syncs and recreates my tables in db
  const spades = await Suit.create({name: 'Spades', color: 'Black'});
  const diamonds = await Suit.create({name: 'Diamonds', color: 'Red'});
  const clubs = await Suit.create({name: 'Clubs', color: 'Black'});
  const hearts = await Suit.create({name: 'Hearts', color: 'Red'});

  // all my spades
  await Card.create({name: 'Ace', suitId: spades.id});
  await Card.create({name: 'Two', suitId: spades.id});
  await Card.create({name: 'Three', suitId: spades.id});
  await Card.create({name: 'Four', suitId: spades.id});
  await Card.create({name: 'Five', suitId: spades.id});
  await Card.create({name: 'Six', suitId: spades.id});
  await Card.create({name: 'Seven', suitId: spades.id});
  await Card.create({name: 'Eight', suitId: spades.id});
  await Card.create({name: 'Nine', suitId: spades.id});
  await Card.create({name: 'Ten', suitId: spades.id});
  await Card.create({name: 'Jack', suitId: spades.id});
  await Card.create({name: 'Queen', suitId: spades.id});
  await Card.create({name: 'King', suitId: spades.id});

  //all my diamonds
  await Card.create({name: 'Ace', suitId: diamonds.id});
  await Card.create({name: 'Two', suitId: diamonds.id});
  await Card.create({name: 'Three', suitId: diamonds.id});
  await Card.create({name: 'Four', suitId: diamonds.id});
  await Card.create({name: 'Five', suitId: diamonds.id});
  await Card.create({name: 'Six', suitId: diamonds.id});
  await Card.create({name: 'Seven', suitId: diamonds.id});
  await Card.create({name: 'Eight', suitId: diamonds.id});
  await Card.create({name: 'Nine', suitId: diamonds.id});
  await Card.create({name: 'Ten', suitId: diamonds.id});
  await Card.create({name: 'Jack', suitId: diamonds.id});
  await Card.create({name: 'Queen', suitId: diamonds.id});
  await Card.create({name: 'King', suitId: diamonds.id});
  
  //all my clubs
  await Card.create({name: 'Ace', suitId: clubs.id});
  await Card.create({name: 'Two', suitId: clubs.id});
  await Card.create({name: 'Three', suitId: clubs.id});
  await Card.create({name: 'Four', suitId: clubs.id});
  await Card.create({name: 'Five', suitId: clubs.id});
  await Card.create({name: 'Six', suitId: clubs.id});
  await Card.create({name: 'Seven', suitId: clubs.id});
  await Card.create({name: 'Eight', suitId: clubs.id});
  await Card.create({name: 'Nine', suitId: clubs.id});
  await Card.create({name: 'Ten', suitId: clubs.id});
  await Card.create({name: 'Jack', suitId: clubs.id});
  await Card.create({name: 'Queen', suitId: clubs.id});
  await Card.create({name: 'King', suitId: clubs.id});

  //all my hearts
  await Card.create({name: 'Ace', suitId: hearts.id});
  await Card.create({name: 'Two', suitId: hearts.id});
  await Card.create({name: 'Three', suitId: hearts.id});
  await Card.create({name: 'Four', suitId: hearts.id});
  await Card.create({name: 'Five', suitId: hearts.id});
  await Card.create({name: 'Six', suitId: hearts.id});
  await Card.create({name: 'Seven', suitId: hearts.id});
  await Card.create({name: 'Eight', suitId: hearts.id});
  await Card.create({name: 'Nine', suitId: hearts.id});
  await Card.create({name: 'Ten', suitId: hearts.id});
  await Card.create({name: 'Jack', suitId: hearts.id});
  await Card.create({name: 'Queen', suitId: hearts.id});
  await Card.create({name: 'King', suitId: hearts.id});

};

module.exports = {
  dbData,
  models: {
      Card, Suit
  }
};
