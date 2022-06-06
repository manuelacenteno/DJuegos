import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  constructor() { }

  notFound :string ='block';

  ngOnInit(): void {
    setTimeout(() =>{
      this.closeLoading();
    },3000);
  }
  closeLoading():void{
    this.notFound = 'none';
  }

}
