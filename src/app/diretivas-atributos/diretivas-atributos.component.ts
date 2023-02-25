import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public heightPx: string = "20px";
  public backgroundColor: string = "red";

  public nome: string ="";
  public list: Array<{nome: string}> = [{nome: "Dener Troquatte"}];
  constructor(){}

  ngOnInit():void {
// esse comando é basicamente para ficar alterando a cor com o ngClass
  setInterval(()=>{
    if(this.valor){
      this.valor = false;
    }else{
      this.valor = true;
    }
// esse comando é basicamente para ficar alternando o tamanho da altura    
    if(this.heightPx == "20px"){
      this.heightPx = "30px";
      this.backgroundColor ="blue";
    }else{
      this.heightPx = "20px";
      this.backgroundColor ="red";
    }
  },1000);

}

public salvar(){
  this.list.push({ nome: this.nome });
  this.nome="";
}
}