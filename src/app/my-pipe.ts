import { SlicePipe } from "@angular/common";
import { Pipe } from "@angular/core";

@Pipe({name:'textpipe'})
export class MyPipe {
    transform(value:any)
    {
       return value[0]+value[1]+value[2]+value[3]+"...";
   
    }

}
