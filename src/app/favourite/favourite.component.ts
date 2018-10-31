import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
 @Input("isFavourite") isSelected: boolean;
@Output("isChange") change = new EventEmitter();

  constructor() { }

  ngOnInit() { 
  }
OnClick(){
  this.isSelected= !this.isSelected;
  this.change.emit({newValue:this.isSelected});
}
}
export interface FavouriteChangedEventArgs{
  newValue: boolean

}