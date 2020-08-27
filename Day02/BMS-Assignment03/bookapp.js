
let Book=require('./book'); 
let { BookManager, showBooks } = require('./bookmanager');
const { contains, inRange } = require('./utils');

// -------------------------------------------------------

let manager = new BookManager();
let a1 = new Book('book-1','Lost Epic Series',["vivek Mishra"], 150, 4);

let promise = manager.addBook(a1);

promise
        .then( result=> showBooks(result, "Book details added"))
        .catch(e=>console.log('error', e));

//manager.addAuthor(a2);
//manager.addAuthor(a3);

promise = manager.getAllBooks();
promise
        .then( result => showBooks(result))
        .catch(e=>console.log('error', e));

//Search books by Title

promise = manager.search(a => contains(a.title, 'lost'));

promise
        .then( result=> showBooks(result))
        .catch(e=>console.log('Error : ', e));

//search books by Price range

promise = manager.search(a => inRange(a.price, 10, 100));

promise
        .then( result=> showBooks(result))
        .catch(e=>console.log('Error : ', e));

// Search books by review range

promise = manager.search(a => inRange(a.rating, 1, 3));

promise
        .then( result=> showBooks(result))
        .catch(e=>console.log('Error : ', e));


