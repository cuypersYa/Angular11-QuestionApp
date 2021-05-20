import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input()
  answers : Array<string> = [];

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  selected : string= "";

  ngOnInit(){
    //this.selected = this.answers[0];
  }
  select(){
    console.log('answer', this.selected)
    this.change.emit(this.selected);
  }

}
