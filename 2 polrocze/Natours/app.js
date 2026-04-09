const express = require('express');

/*
<----------------------------------------->
                Express
<----------------------------------------->
*/
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port} 🚀`);
});
