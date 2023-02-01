import axios from "axios";
import { sendMessage } from "../1-dal/twilio";
import cron from 'node-cron'

export async function getBtc() {
    try {
        const results = (await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')).data;
        const usdPrice = results.market_data.current_price.usd
        const usd24Change = results.market_data.price_change_percentage_24h
        sendMessage(`Bitcoin Price is: ${usdPrice}$, 24 hours change: ${usd24Change}%`)
    } catch (e) {
        console.log(e);
    }
}

export async function sendMessageEveryDay() {
    cron.schedule('0 0 * * *', getBtc);
}