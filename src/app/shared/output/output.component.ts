import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Daniel Caixeta", idade: 36 },
    { nome: "Camila Moura", idade: 32 },
    { nome: "Júlia Moura", idade: 13 },
    { nome: "Giovanna Moura", idade: 10 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
