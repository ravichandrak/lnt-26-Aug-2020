import {Author} from './author';  
import {AuthorService} from './author-service'; 

export class SimpleAuthorService implements AuthorService{

    private authors:Author[];
    static serviceCount=0;
    private serviceId;
    
    constructor() {
        this.serviceId=++SimpleAuthorService.serviceCount;
        
        this.authors=this.authors=[
          {
            "id": "narayan",
            "name": "R.K. NARAYAN",
            "biography": "Author of the book 'Malgudi Days' - This book includes 32 stories, all set in the fictional town of Malgudi, located in South India. Each of the stories portrays a facet of life in Malgudi.",
             "email" : "narayan_rk@gmail.com"           
          },  
          
          {
            "id": "aravind",
            "name": "Aravind Adiga",
            "biography": "Author of the book 'The White Tiger' - This book provides a darkly humorous perspective of India’s class struggle in a globalized world. The novel has been well-received, making the New York Times bestseller list in addition to winning the Man Booker Prize.",
             "email" : "aravind_adiga@gmail.com"           
          },

          {
              "id": "vivek",
              "name": "Vivek Dutta Mishra",
              "biography": "Author of the book 'The Accursed God' -The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
               "email" : "vivekdutta@gmail.com"           
            },
            {
              "id": "chetan",
              "name": "Chetan Bhagat",
              "biography": "Author of the book '2 States' - This book is about a couple coming from two different states in India, who face hardships in convincing their parents to approve of their marriage. The book is partly autobiographical.",
               "email" : "chetan.bhagat@yahoomail.com"           
            }
          ];
    }

    addAuthor(authors: Author): boolean {
        if(authors && authors.name && authors.biography && authors.email){
            this.authors.push(authors);
            return true;
        } else{
            return false;
        }
    }
    
    getAuthors(): Author[] {
        return  this.authors;
    }
    
    getAuthor(id: string): Author {
        return this.authors.find(author => author.id == id);
    }

    deleteAuthor(authorId:string) {
        this.authors = this.authors.filter(author => author.id !== authorId);
        return this.authors;
    }

}
