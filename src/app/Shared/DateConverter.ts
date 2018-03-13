import { Component } from "@angular/core";

 @Component({
    selector: 'date-pipe',
    
  })
  export class DatePipeComponent {
    today: number = Date.now();
  }