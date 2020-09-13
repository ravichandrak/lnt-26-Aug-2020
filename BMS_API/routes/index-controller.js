var express = require('express');
var router = express.Router();

function showAPIList(request, response) {

        let apiLink = `
        <h1><u>NodeJs Web API</u></h1>
        <p>Click on the following url to test the API.</p>
        <p><a href='/api/authors/'>Authors (/api/authors/)</a></p>
        <p><a href='/api/books/'>Books (/api/books/)</a></p>
        
        `;
        response.send(apiLink);  
    
}


//all this will be mapped /authors/
router.get('/', showAPIList);

module.exports = router;
