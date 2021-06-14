import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public path : string ="";
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    if (data && data.anwser && data.question != 0){
      this.path = '../../assets/img/' + data.anwser + '/' + data.question +'.jpeg'
    console.log('this.path', this.path)
    }
    
  }
  ngOnInit(){}
}
