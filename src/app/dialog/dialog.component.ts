import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input()
  counter : number = 99;
  @Input()
  valid : boolean = false;

  path : string ="";
  constructor() {
    
  }

  ngOnInit(): void {
    //this.path = "../../assets/img/"+this.image;
    this.path = '../../assets/img/' + this.valid + '/' + this.counter +'.jpg'
  }

}
