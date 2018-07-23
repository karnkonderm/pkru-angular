import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My World';
  version:Number = 1.0;
  disable:Boolean = "true"

  changeTitle(event){
    console.log(event.target.value);
    this.title = event.target.value;
    //this.tile = event.key;
  }


}
