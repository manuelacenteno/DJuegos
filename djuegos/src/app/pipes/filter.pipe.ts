import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): unknown {
    if(arg.length > 5) return value; //si no se ingresan mas de 5 palabras no aparezca busqueda tambien se puede poner si esta vacio
    const  resultadoBusqueda = [];
    for(const juego of value){
      console.log(juego);
      if(juego.nombre.toLowerCase().indexOf(arg)> -1){
        resultadoBusqueda.push(juego);
      }
    }
    return resultadoBusqueda;
  }

}
