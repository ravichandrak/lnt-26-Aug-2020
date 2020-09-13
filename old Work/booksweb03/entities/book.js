

/* Creating a constructor for Author Object -- ES05 */
/*
let Author=function(id,name,biography,photograph,email){
    this.id=id;
    this.name=name;
    this.biography=biography;
    this.photograph=photograph;
    this.email=email;
    this.books=[]
};

Author.prototype.toString=function(){
    return `${this.id}\t${this.name}\tbooks=${this.books.length}`;
};

*/

/* 
    ES 2015 introduced the concept of class 
    classes are known design model for creating object in c++ like language

*/

class Book{

    
    constructor(isbn,title, author, price, pages, rating, votes,description, cover, series, seriesIndex, ...tags ){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.rating=rating;
        this.votes=votes;
        this.description=description;
        this.price=price;
        this.cover=cover;
        this.series=series;
        this.seriesIndex=seriesIndex;        
        this.tags=tags;
    }

    /* note: functions inside class will not have a function prefix */

    toString(){
        return `Author[Isb=${this.isbn}\tTitle=${this.title}\tAuthor=${this.author}]`;
    }

    

}


module.exports=Book;