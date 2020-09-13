
/*
to use express you need to use : npm install express
*/

//step 1: get express library
let express = require('express');

//step2: create an express app
let app= express(); 

//step 3: define the port
const PORT= process.env.BOOKSWEB_PORT || 80;

//Step 4: define Route Handlers

//serve the static files

app.get('/books',(request,response)=> {
    
    response.sendFile(__dirname + '/public/booksList.html');
});

app.get('/authors', (request,response)=> {
    //let date=new Date();
    //response.send(`Today is ${date.toLocaleDateString()}`);
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/addAuthor', (request,response)=> {
    //let date=new Date();
    //response.send(`Today is ${date.toLocaleDateString()}`);
    response.sendFile(__dirname +'/public/addAuthor.html');
});

app.get('/addBook', (request,response)=> {
    //let date=new Date();
    //response.send(`Today is ${date.toLocaleDateString()}`);
    response.sendFile(__dirname + '/public/addBook.html');
});


app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

app.use((request, response, next)=> {
    console.log(`request for ${request.url}`);
    if(request.url==='' || request.url=='/')
        request.url='/index.html';

    next(); //pass the request to next item
});

//step 5: start listening for request

app.listen(PORT, (error)=>{
    if(error)
        console.log(`error starting application on port ${PORT} : ${error.message}`);
    else
        console.log(`server started on port ${PORT}`);
});