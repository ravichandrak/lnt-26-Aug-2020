const BookService = require("../services/book-service");
const Book=require('../entities/book');
const BookRepository=require('../repositories/book-repository');


let bookRepository=new BookRepository();
var bookService=new BookService(bookRepository);

//express calls user logic
// for url --> /books
async function  getBookList(request,response){

    let term=request.query.term;
    let books=null;

    if(term)
        books=await bookService.search(term);
    else
        books=await bookService.getAll();  //user logic
    //express sends JSON response directly to the client
    await response.send(books);  
}

async function addBook(request,response){
    var book=request.body;
    try{
        await bookService.add(book);
        response.status(201); //created
        await response.send(book);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

async function addBooks(request,response){
    var books=request.body;
    try{
        await bookService.addAll(books);
        response.status(201); //created
        await response.send(books);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

// express is responsible for passing control to user function
//for url format -->   /books/vivek-dutta-mishra
async function getBookById(request,response){

    //express extracts url part and adds to request.params
    let id= request.params.bookId; //this should be the last part of url /books/details/:bookId


    //user logic
    let book=await bookService.getById(id);
    if(book)
        await response.send(book); //express
    else{
        response.status(404); //not found -->express
        await response.send({error: `book not found`, id:id}); //express
    }

};

async function removeBook(request,response){
    let id=request.params.bookId;
    await bookService.remove(id);
    response.status(204); //no content
    await response.send({});
}

async function booksByAuthor(request,response){
    let author=request.params.author;
    console.log('author',author);
    let books=await bookService.searchByAuthor(author);
    await response.send(books);
}

async function booksByTag(request,response){
    let tag=request.params.tag;
    
    let books=await bookService.searchTags(tag);
    await response.send(books);
}


async function booksBySeries(request,response){
    let series=request.params.series;
    let books=await bookService.searchSeries(series);
    await response.send(books);
}




var express = require('express');
const { closeDelimiter } = require("ejs");
var router = express.Router();

//all this will be mapped /books/
router.get('/', getBookList);
router.post('/', addBook);
router.post('/batch',addBooks)
router.get('/:bookId', getBookById);
router.delete('/:bookId', removeBook);
router.get('/by/:author', booksByAuthor);
router.get('/tagged/:tag',booksByTag);
router.get('/series/:series', booksBySeries);



module.exports = router;




