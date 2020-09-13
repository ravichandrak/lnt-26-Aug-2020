let Book=require('../entities/book');

let contains = function(main, sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

class BookService {

    constructor(bookRepository) {
        this.bookRepository = bookRepository;
        //this.authors=[]; //start with an empty list of authors
    }

    async add(book){
        
        if(book && book.title){
            console.log('book is added', book.title);
            if(!book.id)
                book.id=book.title.toLowerCase().replace(' ','-');
            if(!book.authors)
                book.authors=[];
            await this.bookRepository.add(book);
        }
        else{
            console.log('book add failed');
        }
    }

    async getAll(){
        let books=await this.bookRepository.getAll();
        return books;
    }

    async getById(id){
        let book=await this.bookRepository.getById(id);
        return book;
    }

    async search(term) {
        
        return await this.getAll().filter(a=> contains(a.title, term) || contains(a.title,term));
    }

    async remove(id) {
        await this.bookRepository.remove(id);
    }

    async update(book) {
        await this.bookRepository.update(id);
    }

}







module.exports = BookService;
