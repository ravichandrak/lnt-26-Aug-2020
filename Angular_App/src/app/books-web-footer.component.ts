import {Component} from '@angular/core'

@Component({
    selector: 'app-booksweb-footer',
    styles:[
        `        
            .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: blue;
                color: white;
                text-align: center;
                margin-top: 150px;
            }
            .footer span {
                color : white;
            }
        `
    ],
    template: 
        `
        <div class='footer'>
        &copy; <span>Ravichandra K</span>
        </div>
        
        `
})
export class BooksWebFooterComponent{
}