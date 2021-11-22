import { Component } from '@angular/core';

@Component({
  //esse seletor aqui app-root é o nome onde será ligado no HTML para vincular o mesmo 
  selector: 'app-root',
  //aqui é definido para qual arquivo html esse component referencia as informações 
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent {
  nome = 'frontend';
}

