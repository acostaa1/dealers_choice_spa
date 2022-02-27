// ** PHASE 3 - FRONT END ** //
import axios from 'axios';

const start = async () => {
    try {
        const suits = (await axios.get('/suits')).data;
        console.log(suits)
    } catch (error) {
        console.log(error)
    }
}

start();