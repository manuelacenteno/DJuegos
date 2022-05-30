import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.scss']
})
export class BarraNavComponent implements OnInit {

  abrirOpcion:boolean=false;

  constructor( private modalSer: ModalService) { }

  ngOnInit(): void {

    this.modalSer.$modal.subscribe((valor) => {this.abrirOpcion=valor})
  }

  
  openLogin(){
    this.abrirOpcion =true;
  }

}
