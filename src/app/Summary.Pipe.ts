import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(Value: string, limit?: number){
        if(!Value)
return null;
let actualLimit=(limit)? limit:50;
return Value.substr(0,actualLimit)+"...";
    }
}