class Book {
 
    constructor(id, title, coverpage='', author, price, rating){
        this.id = id;
        this.title = title;
        this.coverPage = coverpage;
        this.price = price;
        this.rating = rating;
        this.authors = [];
    }
}

module.exports = Book;