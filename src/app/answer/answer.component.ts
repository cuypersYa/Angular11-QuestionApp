import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '../dialog/dialog-data'; 
import { DialogComponent } from '../dialog/dialog.component';

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

  constructor(public dialog: MatDialog) {}


  ngOnInit(){
  }
  
  select(event: any, question: number){
    if (event && question != 0){
      console.log('resutl = '+ this.result + ' anwser = '+event.value, event);
      this.dialog.open(DialogComponent, {
        data: {
          anwser: (this.result === event.value).toString(),
          question: question
        }
      });
      this.change.emit(this.result === event.value);
    }
    
  }

}
