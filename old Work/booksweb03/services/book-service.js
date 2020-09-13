let Book=require('../entities/book');

let contains=function(main,sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

let listContains=function(list, term){
    for(let value of list )
        if (contains(value,term))
            return true;
}

class BookService{

    constructor(bookRepository){
        this.bookRepository=bookRepository;
        //this.books=[]; //start with an empty list of books
    }

    async add(book){
        if(book && book.title && book.author){
            console.log('book is added', book.name);
            await this.bookRepository.add(book);
        }
        else{
            console.log('book add failed');
        }
    }

    async addAll(books){
        for(let book of books)
            await this.add(book);
    }


    async getAll(){
        let books=await this.bookRepository.getAll();
        return books;
    }

    async getById(id){
        let book=await this.bookRepository.getById(id);
        return book;
    }

    async _search(match){
        let all=await this.getAll();
        return await all.filter(b=> match(b));
    }

    async search(term){               
        return await this._search(b=> contains(b.title,term) || contains(b.description,term) || contains(b.author, term));
    }

    async searchByAuthor(name){
        name=name.toLowerCase().replace(' ','-');
        return await this._search(b=> b.author.toLowerCase().replace(' ','-')==name);
    }

    async searchTags(tag){
        tag=tag.toLowerCase();
        return await this._search(b=> listContains(b.tags,tag));
    }

    async searchSeries(series){
        series=series.toLowerCase.replace(' ','-');
        return await this._search(b=>b.series.toLowerCase().replace(' ','-')===series);
    }

    async remove(id){
        await this.bookRepository.remove(id);
        
    }

}


module.exports=BookService;
