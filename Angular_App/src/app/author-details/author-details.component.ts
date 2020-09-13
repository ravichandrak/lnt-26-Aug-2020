import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import {ActivatedRoute, Router} from '@angular/router'; 
import { SimpleAuthorService } from '../service/simple-author-service';
 
@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
})
export class AuthorDetailsComponent implements OnInit {
 
  public selectedAuthor: Author;
 
  constructor(
 
    private activatedRoute : ActivatedRoute , 
    private router:Router,
    private authorService:SimpleAuthorService
 
  ) { }
 
  ngOnInit(): void {
 
    let authorId= this.activatedRoute.snapshot.params.authorId;
 
    let author= this.authorService.getAuthor(authorId);
 
    if(author)
      this.selectedAuthor=author;
    else    
      this.router.navigateByUrl(`/404?error=No Such Author&id=${authorId}`);
 
  }
 
  goBack(){
    this.router.navigateByUrl('/author/list');
  }
 
}