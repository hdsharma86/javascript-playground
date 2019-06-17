const fs = require('fs');
const fileName = "1-json.json";
const book = {
    title: "Ego is enemy",
    author: "Hardev Sharma"
}

//const bookJson = JSON.stringify(book);

//fs.writeFileSync('1-json.json', bookJson);
const dataBuffer = fs.readFileSync(fileName);
const data = JSON.parse(dataBuffer.toString());

data.title = "Something New Title";
fs.writeFileSync('1-json.json', JSON.stringify(data));
