const fs = require('fs');


// // Blokowanie synchronicznej drogi
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `Kocham Avocado i jestem z tego dumny. ${textIn} \nStworzone ${new Date().toLocaleDateString()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('Plik został zapisany');

// Asynchroniczna droga
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
        });
    });
}
);