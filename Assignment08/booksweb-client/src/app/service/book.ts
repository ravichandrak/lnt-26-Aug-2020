


export interface Book {
    
    title: string;
    author: string;
    description: string;
    bookId:string;
    price:number;
    rating:number;
    releaseDate?: string|Date
    cover?:string;
    tags?:string;
    
  }