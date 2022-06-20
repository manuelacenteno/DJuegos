import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Ficha } from './Ficha';


@Component({
  selector: 'app-cuatro-linea',
  templateUrl: './cuatro-linea.component.html',
  styleUrls: ['./cuatro-linea.component.scss']
})
export class CuatroLineaComponent implements OnInit,AfterViewInit  {
  /*
//ES LA FORMA DE REFERIRNOS A UN ELEMENTO DEL HTML//
  @ViewChild('canvasJuego',{static:false}) canvasJuego:any;

private ctx= CanvasRenderingContext2D;
//private circulo: Ficha= new Ficha(10,10,'#ffffff',ctx);
  
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
    
  }*/
  //-------------------------------------------------------//
  @ViewChild('canvasJuego',{static:false}) 
  private canvas: ElementRef = {} as ElementRef<HTMLCanvasElement>;

  private ctx : CanvasRenderingContext2D | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    console.log(this.canvas.nativeElement);
    
    if(this.ctx){
      this.ctx.fillStyle = "#ff1111";
      this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
   
    }

  }
}
