import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(list: any[],filterText: string): any {
  //   return list ? list.filter(item=>item.name.search(
  //     new RegExp(filterText,'i')) > -1 ): [];
   
  // }
  transform(value: any[],filterString:string,propName:string):any[] {
    const result:any=[];
    if(!value||filterString ===''||propName===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLocaleLowerCase())){
        result.push(a);
      }
      console.log(a)
    });
   
    return result;
    
  }

}
