// *** PHASE ONE - SETTING UP DB AND SEEDING DATA *** //
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/deck_of_cards"
); //process.env is when deploying

//define my models (aka tables) here
const Card = sequelize.define("card", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});

const Suit = sequelize.define("suit", {
  name: {
    type: Sequelize.ENUM("Spades", "Diamonds", "Clubs", "Hearts"),
    allowNull: false,
    unique: true,
  },
  color: {
    type: Sequelize.ENUM("Red", "Black"),
    allowNull: false,
  },
});

const Face = sequelize.define("face", {
  name: {
    type: Sequelize.TEXT
  }
})

// associations
Card.belongsTo(Suit);
Suit.hasMany(Card)
Card.belongsTo(Face)

//seed my db
const dbData = async () => {
  await sequelize.sync({ force: true }); // syncs and recreates my tables in db
  //my faces
  const aceSpades = await Face.create({name: "./PNG-cards-1.3/ace_of_spades.png"})
  const twoSpades = await Face.create({name: "./PNG-cards-1.3/two_of_spades.png"})
  const threeSpades = await Face.create({name: "./PNG-cards-1.3/three_of_spades.png"})
  const fourSpades = await Face.create({name: "./PNG-cards-1.3/four_of_spades.png"})
  const fiveSpades = await Face.create({name: "./PNG-cards-1.3/five_of_spades.png"})
  const sixSpades = await Face.create({name: "./PNG-cards-1.3/six_of_spades.png"})
  const sevenSpades = await Face.create({name: "./PNG-cards-1.3/seven_of_spades.png"})
  const eightSpades = await Face.create({name: "./PNG-cards-1.3/eight_of_spades.png"})
  const nineSpades = await Face.create({name: "./PNG-cards-1.3/nine_of_spades.png"})
  const tenSpades = await Face.create({name: "./PNG-cards-1.3/ten_of_spades.png"})
  const jackSpades = await Face.create({name: "./PNG-cards-1.3/jack_of_spades.png"})
  const queenSpades = await Face.create({name: "./PNG-cards-1.3/queen_of_spades.png"})
  const kingSpades = await Face.create({name: "./PNG-cards-1.3/king_of_spades.png"})
  
  const aceDiamonds = await Face.create({name: "./PNG-cards-1.3/ace_of_diamonds.png"})
  const twoDiamonds = await Face.create({name: "./PNG-cards-1.3/two_of_diamonds.png"})
  const threeDiamonds = await Face.create({name: "./PNG-cards-1.3/three_of_diamonds.png"})
  const fourDiamonds = await Face.create({name: "./PNG-cards-1.3/four_of_diamonds.png"})
  const fiveDiamonds = await Face.create({name: "./PNG-cards-1.3/five_of_diamonds.png"})
  const sixDiamonds = await Face.create({name: "./PNG-cards-1.3/six_of_diamonds.png"})
  const sevenDiamonds = await Face.create({name: "./PNG-cards-1.3/seven_of_diamonds.png"})
  const eightDiamonds = await Face.create({name: "./PNG-cards-1.3/eight_of_diamonds.png"})
  const nineDiamonds = await Face.create({name: "./PNG-cards-1.3/nine_of_diamonds.png"})
  const tenDiamonds = await Face.create({name: "./PNG-cards-1.3/ten_of_diamonds.png"})
  const jackDiamonds = await Face.create({name: "./PNG-cards-1.3/jack_of_diamonds.png"})
  const queenDiamonds = await Face.create({name: "./PNG-cards-1.3/queen_of_diamonds.png"})
  const kingDiamonds = await Face.create({name: "./PNG-cards-1.3/king_of_diamonds.png"})

  const aceClubs = await Face.create({name: "./PNG-cards-1.3/ace_of_clubs.png"})
  const twoClubs = await Face.create({name: "./PNG-cards-1.3/two_of_clubs.png"})
  const threeClubs = await Face.create({name: "./PNG-cards-1.3/three_of_clubs.png"})
  const fourClubs = await Face.create({name: "./PNG-cards-1.3/four_of_clubs.png"})
  const fiveClubs = await Face.create({name: "./PNG-cards-1.3/five_of_clubs.png"})
  const sixClubs = await Face.create({name: "./PNG-cards-1.3/six_of_clubs.png"})
  const sevenClubs = await Face.create({name: "./PNG-cards-1.3/seven_of_clubs.png"})
  const eightClubs = await Face.create({name: "./PNG-cards-1.3/eight_of_clubs.png"})
  const nineClubs = await Face.create({name: "./PNG-cards-1.3/nine_of_clubs.png"})
  const tenClubs = await Face.create({name: "./PNG-cards-1.3/ten_of_clubs.png"})
  const jackClubs = await Face.create({name: "./PNG-cards-1.3/jack_of_clubs.png"})
  const queenClubs = await Face.create({name: "./PNG-cards-1.3/queen_of_clubs.png"})
  const kingClubs = await Face.create({name: "./PNG-cards-1.3/king_of_clubs.png"})
  
  const aceHearts = await Face.create({name: "./PNG-cards-1.3/ace_of_hearts.png"})
  const twoHearts = await Face.create({name: "./PNG-cards-1.3/two_of_hearts.png"})
  const threeHearts = await Face.create({name: "./PNG-cards-1.3/three_of_hearts.png"})
  const fourHearts = await Face.create({name: "./PNG-cards-1.3/four_of_hearts.png"})
  const fiveHearts = await Face.create({name: "./PNG-cards-1.3/five_of_hearts.png"})
  const sixHearts = await Face.create({name: "./PNG-cards-1.3/six_of_hearts.png"})
  const sevenHearts = await Face.create({name: "./PNG-cards-1.3/seven_of_hearts.png"})
  const eightHearts = await Face.create({name: "./PNG-cards-1.3/eight_of_hearts.png"})
  const nineHearts = await Face.create({name: "./PNG-cards-1.3/nine_of_hearts.png"})
  const tenHearts = await Face.create({name: "./PNG-cards-1.3/ten_of_hearts.png"})
  const jackHearts = await Face.create({name: "./PNG-cards-1.3/jack_of_hearts.png"})
  const queenHearts = await Face.create({name: "./PNG-cards-1.3/queen_of_hearts.png"})
  const kingHearts = await Face.create({name: "./PNG-cards-1.3/king_of_hearts.png"})
  
  // my suits
  const spades = await Suit.create({ name: "Spades", color: "Black" });
  const diamonds = await Suit.create({ name: "Diamonds", color: "Red" });
  const clubs = await Suit.create({ name: "Clubs", color: "Black" });
  const hearts = await Suit.create({ name: "Hearts", color: "Red" });

  // all my spades
  await Card.create({ name: "Ace", suitId: spades.id, faceId: aceSpades.id });
  await Card.create({ name: "Two", suitId: spades.id, faceId: twoSpades.id});
  await Card.create({ name: "Three", suitId: spades.id, faceId: threeSpades.id });
  await Card.create({ name: "Four", suitId: spades.id, faceId: fourSpades.id });
  await Card.create({ name: "Five", suitId: spades.id, faceId: fiveSpades.id });
  await Card.create({ name: "Six", suitId: spades.id, faceId: sixSpades.id });
  await Card.create({ name: "Seven", suitId: spades.id, faceId: sevenSpades.id });
  await Card.create({ name: "Eight", suitId: spades.id, faceId: eightSpades.id });
  await Card.create({ name: "Nine", suitId: spades.id, faceId: nineSpades.id });
  await Card.create({ name: "Ten", suitId: spades.id, faceId: tenSpades.id });
  await Card.create({ name: "Jack", suitId: spades.id, faceId: jackSpades.id });
  await Card.create({ name: "Queen", suitId: spades.id, faceId: queenSpades.id });
  await Card.create({ name: "King", suitId: spades.id, faceId: kingSpades.id });

  //all my diamonds
  await Card.create({ name: "Ace", suitId: diamonds.id, faceId: aceDiamonds.id  });
  await Card.create({ name: "Two", suitId: diamonds.id, faceId: twoDiamonds.id  });
  await Card.create({ name: "Three", suitId: diamonds.id, faceId: threeDiamonds.id  });
  await Card.create({ name: "Four", suitId: diamonds.id, faceId: fourDiamonds.id  });
  await Card.create({ name: "Five", suitId: diamonds.id, faceId: fiveDiamonds.id  });
  await Card.create({ name: "Six", suitId: diamonds.id, faceId: sixDiamonds.id  });
  await Card.create({ name: "Seven", suitId: diamonds.id, faceId: sevenDiamonds.id  });
  await Card.create({ name: "Eight", suitId: diamonds.id, faceId: eightDiamonds.id  });
  await Card.create({ name: "Nine", suitId: diamonds.id, faceId: nineDiamonds.id  });
  await Card.create({ name: "Ten", suitId: diamonds.id, faceId: tenDiamonds.id  });
  await Card.create({ name: "Jack", suitId: diamonds.id, faceId: jackDiamonds.id  });
  await Card.create({ name: "Queen", suitId: diamonds.id, faceId: queenDiamonds.id  });
  await Card.create({ name: "King", suitId: diamonds.id, faceId: kingDiamonds.id  });

  //all my clubs
  await Card.create({ name: "Ace", suitId: clubs.id, faceId: aceClubs.id });
  await Card.create({ name: "Two", suitId: clubs.id, faceId: twoClubs.id  });
  await Card.create({ name: "Three", suitId: clubs.id, faceId: threeClubs.id  });
  await Card.create({ name: "Four", suitId: clubs.id, faceId: fourClubs.id  });
  await Card.create({ name: "Five", suitId: clubs.id, faceId: fiveClubs.id  });
  await Card.create({ name: "Six", suitId: clubs.id, faceId: sixClubs.id  });
  await Card.create({ name: "Seven", suitId: clubs.id, faceId: sevenClubs.id  });
  await Card.create({ name: "Eight", suitId: clubs.id, faceId: eightClubs.id  });
  await Card.create({ name: "Nine", suitId: clubs.id, faceId: nineClubs.id  });
  await Card.create({ name: "Ten", suitId: clubs.id, faceId: tenClubs.id  });
  await Card.create({ name: "Jack", suitId: clubs.id, faceId: jackClubs.id  });
  await Card.create({ name: "Queen", suitId: clubs.id, faceId: queenClubs.id  });
  await Card.create({ name: "King", suitId: clubs.id, faceId: kingClubs.id  });

  //all my hearts
  await Card.create({ name: "Ace", suitId: hearts.id, faceId: aceHearts.id });
  await Card.create({ name: "Two", suitId: hearts.id, faceId: twoHearts.id });
  await Card.create({ name: "Three", suitId: hearts.id, faceId: threeHearts.id });
  await Card.create({ name: "Four", suitId: hearts.id, faceId: fourHearts.id });
  await Card.create({ name: "Five", suitId: hearts.id, faceId: fiveHearts.id });
  await Card.create({ name: "Six", suitId: hearts.id, faceId: sixHearts.id });
  await Card.create({ name: "Seven", suitId: hearts.id, faceId: sevenHearts.id });
  await Card.create({ name: "Eight", suitId: hearts.id, faceId: eightHearts.id });
  await Card.create({ name: "Nine", suitId: hearts.id, faceId: nineHearts.id });
  await Card.create({ name: "Ten", suitId: hearts.id, faceId: tenHearts.id });
  await Card.create({ name: "Jack", suitId: hearts.id, faceId: jackHearts.id });
  await Card.create({ name: "Queen", suitId: hearts.id, faceId: queenHearts.id });
  await Card.create({ name: "King", suitId: hearts.id, faceId: kingHearts.id });
};

module.exports = {
  dbData,
  Card, Suit, Face
};
