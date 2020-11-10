import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'AngularHomeWork';
  activeColor: boolean = false;

   changeColor(): void{
       this.activeColor = !this.activeColor;
  }
}
