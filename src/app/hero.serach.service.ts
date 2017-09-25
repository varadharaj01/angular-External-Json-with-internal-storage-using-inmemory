
    import {Pipe, PipeTransform} from '@angular/core';
 
    @Pipe({name: 'category'})
    export class CategoryPipe implements PipeTransform {
      transform(categories: any, searchText: any): any {
         if(searchText == null ||searchText == 0) return null;

        return categories.filter(function(category:any){
          return category.name.toLowerCase().indexOf(searchText) > -1;
        })
      }
    }