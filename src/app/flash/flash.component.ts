import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFlash } from '../flash';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash;
  @Output() ontoggleCard = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleCard(){
    //console.log(this.flash.id);
    this.ontoggleCard.emit(this.flash.id);
  }


}
