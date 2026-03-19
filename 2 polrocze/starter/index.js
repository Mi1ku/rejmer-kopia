const fs = require('fs');
const http = require('http');
const url = require('url');

/*
<----------------------------------------->

                Files

<----------------------------------------->

// Blokowanie synchronicznej drogi
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `Kocham Avocado i jestem z tego dumny. ${textIn} \nStworzone ${new Date().toLocaleDateString()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('Plik został zapisany');
// Asynchroniczna droga
fs.readFile('./txt/startttt.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('Błąd ⛔');
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Plik został 💽!');
            });
        });
    });
}
)
console.log('Wczytywanie 🗃️...');
*/
// <----------------------------------------->
//                Server
// <----------------------------------------->
const server = http.createServer((req, res) => {
    const putName = req.url;
    if (putName === '/overview') {
        res.end('To jest strona przegladu');
    } else if (putName === '/product') {
        res.end('To jest strona produktu');
    } else if (putName === '/API') {
        const dataIn = fs.readFileSync('./dev-data/data.json', 'utf-8');
        res.writeHead(200, {
            'Content-type': 'application/json',
            'my-own-header': 'data-from-server'
        });
        res.end(dataIn);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end(
               '<center><h1 style="color:red;padding-top:300px;">Page not found</h1><img src="https://media.tenor.com/lGzM8JC4iZ4AAAAe/dawid-jasper-jasper.png"></img></center>'
        );
    }
}); 
server.listen(8000, 'localhost', () => {
    console.log('Serwer działa na porcie 8000');
});