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
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if (product.organic === false) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(url.parse(req.url, true));
    const putName = req.url;
    if (putName === '/' || putName === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});
        const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);
        console.log(cardsHTML);
        res.end(output);
    } else if (putName === '/product') {
        res.end('This is the PRODUCT');
    } else if (putName === '/API') {
            const productdata = JSON.parse(data);
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end(
            '<center><h1 style="color:red;padding-top:300px;">Page not found</h1><img src="https://assets.dochipo.com/editor/animations/404-error/7b0e030f-567e-4417-94bb-bc462d5f630c.gif"></img></center>'
        );
    }
});
server.listen(8000, '127.0.0.1', () => {
    console.log('Serwer działa na porcie 8000');
});