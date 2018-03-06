import { Injectable } from '@angular/core';
import { Invention } from './inventions.class';

@Injectable()
export class InventionsService {

  defaultInvention : Invention[] = [
    {
     name : 'Html lang',
     inventor : 'abcd',
     year : '1782'
   },
   {
    name : 'Python',
    inventor : 'Guido van Rosum',
    year: '1991'
  } ,
  {
    name : 'C++',
    inventor : 'Bjarne Stroustrup',
    year : '1983'
  }
   ]

   getInventions(): Invention[]{
     return this.defaultInvention;
   }

  constructor() { }

}
