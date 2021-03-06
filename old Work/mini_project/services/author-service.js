let Author=require('../entities/author');

let contains = function(main, sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

class AuthorService {

    constructor(authorRepository) {
        console.log("comes here");
        this.authorRepository=authorRepository;
        //this.authors=[]; //start with an empty list of authors
    }

    async add(author){
        if(author && author.name){
            console.log('author is added', author.name);
            if(!author.id)
                author.id=author.name.toLowerCase().replace(' ','-');
            if(!author.books)
                author.books=[];
            await this.authorRepository.add(author);
        }
        else{
            console.log('author add failed');
        }
    }

    _add(author){

        return new Promise((resolve,reject)=>{
            console.log('author being added',author);
            setTimeout(()=>{
                if(author && author.name){
                    console.log('author is added', author.name);
                    if(!author.id)
                        author.id=author.name.toLowerCase().replace(' ','-');
                    if(!author.books)
                        author.books=[];
                    this.authors.push(author);
                    resolve(author);
                } else{
                    console.log('author add failed');
                    reject(author); //author add failed.
                }
                
            },10);


        })

       
    }

    _getAll(){

        let self=this;
        
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                
                console.log("returning all authors ",self.authors)
                return resolve(self.authors);

            },10);            
        });
    }

    async getAll(){
        let authors=await this.authorRepository.getAll();
        return authors;
    }

    async getById(id){
        let author=await this.authorRepository.getById(id);
        return author;
    }

    async search(term) {
        console.log("term : " + term);
        return await this.getAll().filter(a=> contains(a.name, term) || contains(a.biography,term) || contains(a.photograph,term));
    }

    async remove(id){
        await this.authorRepository.remove(id);
        
    }

    async getAuthorBooksById(id) {
        let book = await this.authorRepository.getAuthorBooksById(id);
        return book;
    }

    async getAuthorPhotographById(id) {
        let photograph = await this.authorRepository.getAuthorPhotographById(id);
        return photograph;
    }
    
    async updateAuthor(id, author) {

        let cAuthor = await this.getById(id);

        if (cAuthor) {

            if(author && author.name) {
                
                if(!author.id)
                    author.id=author.name.toLowerCase().replace(' ','-');
                if(!author.books)
                    author.books=[];
                await this.authorRepository.update(id, author);
            }
            else{
                console.log('author update failed');
            }
        } else {
            console.log('author id not found');
        }
    }

}







module.exports=AuthorService;
