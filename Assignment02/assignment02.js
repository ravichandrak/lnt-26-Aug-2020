// Assignment - 02
// Date : 26-Aug-2020
// ------------------------------------------------------------------------------------

//Author Object
function Author(id, name, biography, birthDate, email, photographUrl, booksList) {
    this.id = id; 
    this.name = name;
    this.biography = biography;
    this.birthDate = birthDate;
    this.email = email;
    this.photographUrl = photographUrl;
    this.booksList = booksList;
}

//AuthorManager object
function AuthorManager() {

    this.addAuthor = function() {}

    this.getAllAuthors = function() {}

    this.getAuthorById = function(id) {}

    this.SearchByName = function(authorName) {}

    this.SearchByBookWritten = function(bookName) {}

    this.SearchByBiography = function(biography) {}

    this.deleteAuthor = function(authorId) {}

    this.UpdateAuthorDetails = function() {}
}

//Book Object
function Book(id, title, coverPageUrl, author, price, rating) {
    
    this.id = id;
    this.title = title;
    this.coverPageUrl = coverpageUrl;
    this.author = author;
    this.price = price;
    this.rating = rating;
}

//BookManager Object
function BookManager() {

    this.addBook = function() {}

    this.getAllBooks = function() {}

    this.getBookById = function() {}

    this.getBookByAuthor = function() {}

    this.searchOnTitle = function() {}

    this.searchInPriceRange = function() {}

    this.searchInReviewRange = function() {}

    this.deleteBook = function() {}

    this.updateBook = function() {}
}