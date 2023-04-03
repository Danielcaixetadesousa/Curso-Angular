import { publishFacade } from "@angular/compiler";
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
    

    <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributos</h1>
      <h3>Nova</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>  
    <app-new-component></app-new-component>
    <app-diretivas-atributos></app-diretivas-atributos>
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Add</button>
-->
<ng-template [ngIf]="getDados">
<h1>{{getDados.nome}}</h1>
<h2>{{getDados.idade}}</h2>
</ng-template>

<app-output (enviarDados)="setDados($event)"></app-output>
<router-outlet></router-outlet>

    `
})
export class AppComponent implements OnInit {

  public add() {
    this.addValue += 1;
  }
  public destruir: boolean = true;
  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  public destruirComponente() {
    this.destruir = false;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }
}