import { Component } from "@angular/core";

@Component({
    selector: 'app-books',  //custom html element or component identifier
    template:
    `
    <app-bookweb-header></app-bookweb-header>
    <div>
        <h2>Book list</h2>
    </div>
    <app-bookweb-footer></app-bookweb-footer>
    `
})
export class BooksWebAppComponent {
    
}