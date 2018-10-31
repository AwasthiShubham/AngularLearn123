import { CoursesService } from './courses.service';
import {Component } from '@angular/core'
@Component(// This is a decorator
{
selector:'Courses ',//<Courses>
template: `
<h2>{{title}}</h2>
<ul>
<li *ngFor="let course of courses">
{{course }}
</li></ul>
{{text | summary:20}}
<img [src] = "imageUrl"/>
<table>
    <tr>
        <td [attr.colspan]="colspan"></td>
    </tr>
</table>
<button class = "btn btn-primary" [style.backgroundColor]="isActive ? 'Blue':'Red'">Shubham</button>
<div (click)="OnDiv()">
<button (click)="OnSave($event)">Save</button>
</div>
<input [(ngModel)]="email" (keyup.enter)="OnKeyUp()"/>

`

//<input #email (keyup.enter)="OnKeyUp(email.value)"/>
//<input [value]="email" (keyup.enter)="email=$event.target.value; OnKeyUp()"/>
})
export class CoursesComponent{

   // OnKeyUp($event){
//if($event.keyCode===13)
//console.log("Enter is Pressed");
//console.log($event.target.value);
//    }
/*OnKeyUp(email){
console.log(email);
}*/
text="I love you shubham awasthi,therfore shubham also love me."
email="me@example.com";
OnKeyUp(){
    console.log(this.email);
}
OnSave($event){
        $event.stopPropagation();
        console.log("Button was Clicked",$event);
    }
    OnDiv(){
        console.log("Div was clicked");
    }
    isActive=true;
 title ="List of Courses";
courses;
//imageUrl = "http://illinoisdouble.com/wp-content/uploads/pictures-images-amazing-wonderful-macro-photography-of-nature-pics-pictures-images.jpg";
colspan = 2;
constructor(service:CoursesService ){
    //let service= new CoursesService();
    this.courses= service.getCourses();

}
}