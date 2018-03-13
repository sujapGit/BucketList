import { Component } from '@angular/core';
import { AppServices } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  public isLogIn :boolean = true; 
  constructor(private _appService: AppServices){
    
    this._appService.sayHello()
    .subscribe(
      result => {
        this.title = result;
      }
    )

     
  
  
  
  }




}