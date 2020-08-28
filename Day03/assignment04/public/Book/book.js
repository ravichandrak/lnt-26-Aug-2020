let Book = function(id, title, author, price, rating, coverPageUrl = null){

    this.id = id;
    this.title = title;
    this.coverPageUrl = coverPageUrl;
    this.author = [];
    this.price = price;
    this.rating = rating;  
}

Book.prototype.toString = function() {
    return `Book[${this.id}, ${this.title}, ${this.price}, ${this.rating}]`;
};

module.exports = Book;