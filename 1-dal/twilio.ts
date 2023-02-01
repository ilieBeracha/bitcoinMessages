import * as dotenv from 'dotenv'
dotenv.config()

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

const client = require('twilio')(accountSid, authToken);
export async function sendMessage(messageBody:String) {
    
    client.messages
        .create({
            body: messageBody,
            messagingServiceSid: 'MGe3080a6e31bcaf8f420aa0a08a6aaec1',
            to: '+972544868495'
        })
        .then((message:any) => console.log(message.sid))
        .done();
}
