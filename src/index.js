// ** PHASE 3 - FRONT END ** //
import axios from 'axios';

const fullDeck = document.querySelector('#deck');

const renderCards = (cards) => {
    const html = cards.map(card => `
    <li>
        <a href = '#${card.id}'>${card.name} of ${card.suit.name}</a>
    </li>
    `).join('');
    fullDeck.innerHTML = html;
    
}


const start = async () => {
    try {
        const cards = (await axios.get('/cards')).data;
        console.log(cards);
        renderCards(cards);
    } catch (error) {
        console.log(error)
    }
}

start();