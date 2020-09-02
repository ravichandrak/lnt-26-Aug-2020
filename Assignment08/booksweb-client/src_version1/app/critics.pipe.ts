import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'critics'
})
export class CriticsPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let critics = '';
    
    const rating = Math.round(value);
    const rem = Math.round(value/10);

console.log(rating);

console.log(rem);

    if (rating == 10  || rem == 0) 
      critics = 'Excellent. Must Read';
    
    else if (rating == 9 || rem == 1) 
      critics = 'Wonderful Book. Should Read ';
    
    else if (rating == 8 || rem ==2) 
      critics = "It’s a Very Good book to read";
    
    else if (rating == 7 || rem == 3)
    critics = "Good book. You won't be dispapointed ";
    
    else if (rating == 6 || rem == 4)
    
    critics = "Good. Read it if you have time ";
    
    else if (rating == 5 || rem == 5)
    
    critics = "Average. You may like it ";
    
    else if (rating == 4 || rem == 6)
    
      critics = "Average. Read if you must! ";
    
    else if (rating == 3 || rem == 7)
    
      critics = "Skip it, Go find some better read ";
     
    else if (rating == 2 || rem == 8)
      critics = "Expensive at cost 0 ";
    
    else if (rating == 1 || rem == 9)
      critics = "Don’t read if you are paid to.";
    else
      critics = '';
  
    return critics;
  }

}
