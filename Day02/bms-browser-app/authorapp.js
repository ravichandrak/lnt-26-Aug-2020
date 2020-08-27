//----- my application logic here ---

let manager=new AuthorManager();

manager.addAuthor(new Author('vivek','Vivek Dutta Mishra','Author of the Lost Epic Series'));
manager.addAuthor(new Author('archer','Jeffrey Archer','International best seller of fictions'));
manager.addAuthor(new Author('grisham','John Grisham','Leading author of legal fiction'));


showAuthors(manager.getAll(), 'List of All Authors');

console.log('author with id vivek', manager.getById('vivek'));
console.log('author with id amish', manager.getById('amish'));

manager.remove('archer');

showAuthors(manager.getAll(), 'List after deleting Archer');