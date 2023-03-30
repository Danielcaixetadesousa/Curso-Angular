import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <!--
    <app-data-biding></app-data-biding>
    <app-diretivas-estruturais></app-diretivas-estruturais> 
-->
   <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributos</h1>
      <h3>Diretivas de Atributo</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>

    <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributos</h1>
      <h3>Nova</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>  
    
-->
<app-new-component></app-new-component>
<app-diretivas-atributos></app-diretivas-atributos>
    `
})
export class AppComponent implements OnInit {

  public valor = "Daniel";

  constructor() {
  }

  ngOnInit(): void { }

}