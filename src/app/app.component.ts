import { Component } from '@angular/core';
import { IFlash } from './flash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
  console.log(id);
  const flash = this.flashs.find((item) => item.id === id);
  flash.show = ! flash.show;

}

}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 );
}
