import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercustompipe',
  standalone: true
})
export class FilterCustomPipePipe implements PipeTransform {

  transform(value: any[], searchText:string): any[] {
    if(!value){
      return [];
    }
    if(!searchText){
      return [];
    }

    searchText=searchText.toLowerCase();

    return value.filter(val => {
      return val.name.toLowerCase().includes(searchText);
    })

  }

}
