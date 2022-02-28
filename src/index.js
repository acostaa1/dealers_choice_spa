// ** PHASE 3 - FRONT END ** //
import axios from "axios";

const unflippedCard = document.querySelector("#deck");
const flippedCard = document.querySelector('#deck')

const renderCards = (cards) => {
  const html = cards
    .map(
      (card) => `
    <li>
        <a href = '#${card.id}'><img src= '/PNG-cards-1.3/back.png'/></a>
    </li> 
    `
    )
    .join("");
  unflippedCard.innerHTML = html;
};

const renderFaces = (faces) => {
    const html = faces
      .map(
        (face) => `
      <li>
        <img src = '${face.name}'/>
      </li>
      `
      )
      .join("");
    flippedCard.innerHTML = html;
  };

const start = async () => {
  try {
    const cards = (await axios.get("/cards")).data;
    //const faces = (await axios.get("/faces")).data;
    console.log(cards);

    //console.log(faces);
    renderCards(cards);
    //renderFaces(faces)
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("hashchange", async () => {
  const cardId = window.location.hash.slice(1);
  console.log(cardId);
  const url = `/faces/${cardId}`;
  const faces = (await axios(url)).data;
  console.log(faces)
  //renderFaces(faces)
});

start();
