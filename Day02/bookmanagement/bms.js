//Author Business Logic

let Author=function(id,name,biography=null,photoUrl=null,email=null){

    this.id=id;
    this.name=name;
    this.biography=biography;
    this.photoUrl=photoUrl;
    this.email=email;
    this.books=[] ; //currently and empty list of books   
}
Author.prototype.toString=function(){
    return `Author[${this.id},${this.name}]`;
};

let AuthorManager=function(){
    this.authors=[]; //an empty list of authors;
};

AuthorManager.prototype.addAuthor=function(author){
    if(author && author.id && author.name )
        this.authors.push(author);
};

AuthorManager.prototype.getAll=function(){
    return this.authors;
};

AuthorManager.prototype.getById=function(id){

    //ES2015 for of loop to interate an array
    for(let author of this.authors)
        if (author.id===id){
            return author;
        }

    return null;
};

AuthorManager.prototype.remove=function(id){

    let newList=[];
   for(let author of this.authors){
       if(author.id!==id)
            newList.push(author); //push all authors to new list, except the one we have to remove
   }

   this.authors=newList;

}


//Author Presentation Logic

function showAuthors(authors, heading=null){
    console.log(heading);
    for(let author of authors){
        console.log(`${author}`);
    }
}




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