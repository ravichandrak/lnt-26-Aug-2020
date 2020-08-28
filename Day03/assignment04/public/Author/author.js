
let Author = function(id, name, biography=null, photoUrl=null, email=null){

    this.id = id;
    this.name = name;
    this.biography = biography;
    this.photoUrl = photoUrl;
    this.email = email;
    this.books = [] ; //currently and empty list of books   
}

Author.prototype.toString = function() {
    return `Author[${this.id}, ${this.name}]`;
};

/*
Every .js file is a module for NodeJS
Anything defined in a module, by default is available only within that module
If you want to access anything from this module in other module
You must export it from here
*/

module.exports = Author;   //I want to export Author to make it available in other modules