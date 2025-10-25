const express = require('express');
const axios = require('axios');

const app = express();

let testabc;

async function test() {
    const resp1 = await axios.get("https://www.instagram.com/");
    const resp = await axios.get("https://www.instagram.com/");
    testabc = resp.data;

    app.get('/', (req, res) => {
        // res.set({
        //     'Content-Type': 'text/html',
        //     'Content-Disposition': 'attachment; filename="my-file.html"'
        // });

        // Send the HTML string as the response
        console.log(testabc);
        res.send(testabc);
        res.send("hello world");
    })

    app.listen(3001, () => {
    console.log(`Proxy server is running on port}`);
    });
}

test();