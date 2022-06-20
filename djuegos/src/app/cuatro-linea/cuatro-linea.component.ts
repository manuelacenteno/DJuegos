import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cuatro-linea',
  templateUrl: './cuatro-linea.component.html',
  styleUrls: ['./cuatro-linea.component.scss']
})
export class CuatroLineaComponent implements OnInit,AfterViewInit  {
//ES LA FORMA DE REFERIRNOS A UN ELEMENTO DEL HTML//
  @ViewChild('canvasJuego',{static:false}) canvasJuego:any;

  private ctx= CanvasRenderingContext2D;

  
//CAPTURO POR DONDE PASA EL MOUSE//
  @HostListener('document:mousemove', ['$event'])
  onMouseMove = (e: any) => {
    //AGARRO SOLO LOS QUE SE MUEVEN ADENTRO DEL ID//
    if (e.target.id === 'cJuego') {
      console.log(e);
    }
  }

  constructor() { }

  

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.render();
    
  }
  render(){
    this.ctx = this.canvasJuego.nativeElement.getContext('2d');
    
  }


}
