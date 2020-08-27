

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
