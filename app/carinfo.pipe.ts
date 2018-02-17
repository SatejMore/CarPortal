import {Pipe,PipeTransform} from '@angular/core'
import { Icarinfo } from './Icarinfo';

@Pipe({
    name:'carfilter'
})

export class carinfofilter implements PipeTransform{

    transform(inputArray:Icarinfo[],searchstring:string):Icarinfo[]{
        searchstring = searchstring?searchstring.toLowerCase():null;
        return searchstring? 
        inputArray.filter((car:Icarinfo)=>car.brand.toLowerCase().indexOf(searchstring)!=-1):inputArray;
    }
}