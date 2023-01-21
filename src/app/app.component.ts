import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <app-data-biding></app-data-biding>
    <router-outlet></router-outlet>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    `
  })
  export class AppComponent implements OnInit {

    public nome = "Daniel";

    constructor() {
     }

     ngOnInit(): void { }

    }