import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MI PRIMER CALCULADORA';
  resultadoPadre: number;

  procesaResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
}
