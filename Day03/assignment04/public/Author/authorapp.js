
let Author=require('./author'); //Author object is exported

//we will use extraction syntax to extract required fields from module.export
let {AuthorManager, showAuthors} = require('./authormanager');
const { contains } = require('./utils');

//----- my application logic here ---

let manager=new AuthorManager();
let a1=new Author('vivek','Vivek Dutta Mishra','Author of the Lost Epic Series');
a1.books.push('The Accursed God');


let a2=new Author('archer','Jeffrey Archer','International best seller of fictions');
a2.books.push('Kane and Abel');
a2.books.push('Sins of Father');
a2.books.push('Sons of Fortune');

let a3=new Author('grisham','John Grisham','Leading author of legal fiction');
a3.books.push('The Summons');
a3.books.push('The Runaway Jury');


let promise = manager.addAuthor(a1);

promise
        .then( result=> showAuthors(result, "Author details added"))
        .catch(e=>console.log('error', e));

//manager.addAuthor(a2);
//manager.addAuthor(a3);

promise = manager.getAll();
promise
        .then( result=> showAuthors(result))
        .catch(e=>console.log('error', e));


let fictionPromise = manager.search(a => contains(a.biography, 'fiction'));

fictionPromise
        .then( result=> showAuthors(result))
        .catch(e=>console.log('Error : ', e));