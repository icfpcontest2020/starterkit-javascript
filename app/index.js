const got = require('got');

const serverUrl = process.argv[2];
const playerKey = process.argv[3];

console.log(`ServerUrl: ${serverUrl}; playerKey: ${playerKey}`);

sendRequest();

async function sendRequest() {
    try {
        const response = await got(`${serverUrl}?playerKey=${playerKey}`);
        console.log(response.body);
    } catch (e) {
        throw e;
    }
}
