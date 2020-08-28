// you can access Author module here
// you should give path of .js file
// module name will not contain extension
let Author = require('./author');
let {searchAll} = require('./utils');


let AuthorManager = function(){
    this.authors = []; //an empty list of authors;
};

AuthorManager.prototype.addAuthor = function(author) {
    let authors = this.authors;

    let promise = new Promise(function (resolve, reject) {
        
        if(author && author.id && author.name) {
            authors.push(author);
            return resolve(authors);
        }
        else {
            return reject('invalid author details');
        }
    });
    return promise;
};

AuthorManager.prototype.getAll = function() {
    let authors = this.authors;

    let promise = new Promise(function (resolve, reject) {
        
        if (authors.length == 0)
            return reject("Author details not found");
        else
            return resolve(authors);
    });

    return promise;
};

AuthorManager.prototype.getById = function(id) {

    let authors = this.authors;

    let promise = new Promise(function (resolve, reject) {
     
        for(let author of authors)
            if (author.id === id) {
                return resolve(author);
            }

        return reject(`Author details not found for - ${id}`);
    });

    return promise;
};

AuthorManager.prototype.remove = function(id) {
    let authors = this.authors;

    let promise = new Promise(function (resolve, reject) {

        authors = search(authors, a => a.id!==id);

        if (authors.length == 0)
            return reject(`Author details not found for ${id}`);
        
        return resolve(authors); 
    });

    return promise;
}


AuthorManager.prototype.search = function(isMatch) {
    let authors = this.authors;

    let promise = new Promise(function (resolve, reject) {
        let author = searchAll(authors, isMatch);
        if (author.length == 0)
            return reject(`Match not found`);
        else
            resolve(author);
    });

    return promise;
}


function showAuthors(authors, heading = null) {
    //console.log(heading);
    for(let author of authors){
        console.log(`${author}`);
    }
}

/*
From this module I want to export multiple items -- AuthorManager, showAuthors

But modules.export can be a single object only.

So we will 
  1. create an object that will have two properties
  2. export this new object
*/

module.exports={
    AuthorManager:AuthorManager,
    showAuthors:showAuthors
};
