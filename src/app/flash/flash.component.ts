import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFlash } from '../flash';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash;
  @Output() onToggleCard = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCard() {
    console.log(this.flash.id);
    this.onToggleCard.emit(this.flash.id);
  }

  markCorrect() {
    this.onRememberedChange.emit({
      id : this.flash.id,
      flag : 'correct'
    })

  }

  markIncorrect() {
    this.onRememberedChange.emit({
      id : this.flash.id,
      flag : 'incorrect'
    })


  }

  editFlash() {
    this.onEdit.emit(this.flash.id);


  }
  deleteFlash() {
    this.onDelete.emit(this.flash.id);
  }

}
