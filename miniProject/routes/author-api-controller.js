const AuthorService = require("../services/author-service");
const Author=require('../entities/author');
const AuthorRepository=require('../repositories/author-repository');

let authorRepository = new AuthorRepository();

var authorService = new AuthorService(authorRepository);

//express calls user logic
// for url --> /authors
async function  getAuthorList(request,response){

    //user logic to get user data
    let authors=await authorService.getAll();  //user logic
    //express sends JSON response directly to the client
    await response.send(authors);  
}

async function addAuthor(request, response){
    var author=
    {
        "id":"vivek-dutta-mishra",
        "name":"Vivek Dutta Mishra",
        "biography":"Author of the Amazon Best Seller The Accursed God",
        "photograph":"vivek.png",
        "email":"vivek@conceptarchitect.in",
        "books":[]
    };
    
    //request.body;
    
    try{
        await authorService.add(author);
        response.status(201); //created
        await response.send(author);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

// express is responsible for passing control to user function
//for url format -->   /authors/vivek-dutta-mishra
async function getAuthorById(request,response){

    //express extracts url part and adds to request.params
    let id= request.params.authorId; //this should be the last part of url /authors/details/:authorId

    //user logic
    let author=await authorService.getById(id);
    if(author)
        await response.send(author); //express
    else{
        response.status(404); //not found -->express
        await response.send({error: `author not found`, id:id}); //express
    }

};

async function removeAuthor(request,response){
    let id=request.params.authorId;
    await authorService.remove(id);
    response.status(204); //no content
    await response.send({});
}

async function getAuthorBooksById(request, response) {
    let id= request.params.authorId; //this should be the last part of url /authors/details/:authorId
    try {
    //user logic
    let book = await authorService.getAuthorBooksById(id);
    if(book)
        await response.send(book); //express
    else{
        response.status(404); //not found -->express
        await response.send({error: `author books not found`, id:id}); //express
    }
    } catch(e) {
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

async function getAuthorPhotographById(request, response) {
    let id= request.params.authorId; //this should be the last part of url /authors/details/:authorId
    try {
    //user logic
    let photograph = await authorService.getAuthorPhotographById(id);
    if(photograph)
        await response.send(photograph); //express
    else{
        response.status(404); //not found -->express
        await response.send({error: `author photograph not found`, id:id}); //express
    }
    } catch(e) {
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

async function updateAuthor(request, response) {
    
    let id= request.params.authorId;
    let author = request.body;
    try {

        await authorService.updateAuthor(id, author);
        response.status(201); //updated
        await response.send({});
    
    } catch(e) {
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}




var express = require('express');
var router = express.Router();

//all this will be mapped /authors/
router.get('/', getAuthorList);
router.post('/', addAuthor);
router.get('/:authorId', getAuthorById);
router.get('/:authorId/books', getAuthorBooksById);
router.get('/:authorId/photograph', getAuthorPhotographById);

router.delete('/:authorId', removeAuthor);
router.put('/:authorId', updateAuthor);
module.exports = router;