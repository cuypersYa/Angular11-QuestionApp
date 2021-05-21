import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input()
  answers : Array<string> = [];
  @Input()
  result: string = "";

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  selected : string= "";

  ngOnInit(){
  }
  
  select(event: any){
    console.log('resutl = '+ this.result + ' anwser = '+event.value);
    this.change.emit(this.result === event.value);
  }

}
