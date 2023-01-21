import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

// tipando a varivel com string
  public nome: string = "Daniel";
  public idade: number = 35;
  public maisUm: number = 1;
  
  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/01/como-criar-site.jpg";
  public imgTitle: string = "Property Binding";
  
  
  public position: { x: number, y: number } = { x: 0, y: 0}
  constructor() {}

  ngOnInit(): void {
    
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
