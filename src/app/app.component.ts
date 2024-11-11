import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';
  result:string = '';
  resultName = 'Resultado';

  add(firstNumber:string,secondNumber:string){
    this.resultName = 'Resultado da Adição é: ';
    this.result = (Number(firstNumber)+Number(secondNumber)).toString();
  }

  subtract(firstNumber:string,secondNumber:string){
    this.resultName = 'Resultado da Subtração é: ';
    this.result = (Number(firstNumber)-Number(secondNumber)).toString();
  }

  multiply(firstNumber:string,secondNumber:string){
    this.resultName = 'Resultado da Multiplicação é: ';
    this.result = (Number(firstNumber)*Number(secondNumber)).toString();
  }
  divide(firstNumber:string,secondNumber:string){
    this.resultName = 'Resultado da Divisão é: ';
    this.result = (Number(firstNumber)/Number(secondNumber)).toString();
  }
}
