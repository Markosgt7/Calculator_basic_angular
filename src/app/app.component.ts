import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MI PRIMER CALCULADORA';
  resultado: number =0;

  procesaResultado(resultado: number){
    this.resultado= resultado;
  }
 
}
