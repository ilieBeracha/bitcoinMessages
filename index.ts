import express from 'express'
import { sendMessageEveryDay } from './2-fetch/cryptoData';
import * as dotenv from 'dotenv'
dotenv.config()

const server = express();
sendMessageEveryDay()

server.listen(process.env.port , () => {
    console.log(`listening on port ${process.env.PORT}...`);
})