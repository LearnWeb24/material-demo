import { Component } from '@angular/core';
import { IFlash } from './flash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  editng = false;
  editingId: number;
  flashs: IFlash[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
}, {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id: getRandomNumber(),
}, {
    question: 'Question 3',
    answer: 'Answer 3',
    show: false,
    id: getRandomNumber(),
}];

trackById(index: number, flash: IFlash) {
  return flash.id;
}

handleToggleCard(id) {

  const flash = this.flashs.find((item) => item.id === id);
  console.log(flash);
  flash.show = ! flash.show;

}

handleDelete(id){
  const flashId = this.flashs.findIndex( flash => flash.id === id);

  this.flashs.splice(flashId,1);

}

handleEdit(id){

this.editng = true;
this.editingId = id;



}

handleRememberedChange({id, flag}){
  const flash = this.flashs.find((flash) => flash.id ===id);
  flash.remembered = flag;

}

}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 );
}
