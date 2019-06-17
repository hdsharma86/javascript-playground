const https = require('https');
const url = 'https://api.darksky.net/forecast/31912d96c87e549209d8d6852eac60eb/40,-75';

const request = https.request(url, (response)=>{

    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.on('error', (error) => {
    console.log('Error: ', error);
});

request.end();