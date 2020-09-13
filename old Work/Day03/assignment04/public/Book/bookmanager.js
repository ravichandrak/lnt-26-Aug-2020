let Book = require('./book');
let {searchAll} = require('./utils');


let BookManager = function(){
    this.books = []; //an empty list of books;
};


BookManager.prototype.addBook = function(book) {
    let books = this.books;

    let promise = new Promise(function (resolve, reject) {
        
        if(book && book.id && book.title) {
            books.push(book);
            return resolve(books);
        }
        else {
            return reject('invalid book details');
        }
    });
    return promise;
}

BookManager.prototype.getAllBooks = function() {

    let books = this.books;

    let promise = new Promise(function (resolve, reject) {
        
        if (books.length == 0)
            return reject("No books found");
        else
            return resolve(books);
    });

    return promise;

}

BookManager.prototype.GetBookById = function(id) {

    let books = this.books;

    let promise = new Promise(function (resolve, reject) {
     
        for(let book of books)
            if (book.id === id) {
                return resolve(book);
            }

        return reject(`Book details not found for - ${id}`);
    });

    return promise;

}

BookManager.prototype.GetByAuthor = function(name) {

    let books = this.books;

    let promise = new Promise(function (resolve, reject) {
     
        for(let book of books)
            if (book.author === name) {
                return resolve(book);
            }

        return reject(`Book details not found for - ${name}`);
    });

    return promise;

}

BookManager.prototype.RemoveBook = function(id) {

    let books = this.books;

    let promise = new Promise(function (resolve, reject) {

        books = search(books, a => a.id !== id);

        if (books.length == 0)
            return reject(`Author details not found for ${id}`);
        
        return resolve(books); 
    });

    return promise;
}

BookManager.prototype.search = function(isMatch) {
    let books = this.books;

    let promise = new Promise(function (resolve, reject) {
        let book = searchAll(books, isMatch);
        if (book.length == 0)
            return reject(`Match not found`);
        else
            resolve(book);
    });

    return promise;
}

function showBooks(books, heading = null) {
    //console.log(heading);
    for(let book of books){
        console.log(`${book}`);
    }
}


module.exports={
    BookManager:BookManager,
    showBooks:showBooks
};
