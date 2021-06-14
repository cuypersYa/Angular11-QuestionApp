import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questions : Question[] = [] ;
  results : Array<string> = [] ; 
  anw1 : string = "";
  valid: boolean=false;
  counter :number = 0;
  score:number = 0;

  constructor( private questionService : QuestionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  public getQuestions(){
    this.questionService.getQuestion()
    .subscribe(result => {
      this.questions = result ;
      console.log('result', result)
      //this.defineAnwsers(this.questions);

    });
  }

  // public defineAnwsers( questions : Question[]){
  //   for (let index = 0; index < questions.length; index++) {
  //     this.results.push(questions[index].answers[0]);      
  //   }
  // }

  public shuffle(array : Array<any>) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  public answerValid(event: boolean){
    console.log('questionComp:'+ event+'=>',  (event? this.score+ 1 : this.score));
    this.score = (event? this.score+ 1 : this.score);
    this.counter++;
    console.log('counter '+this.counter)
    this.openDialog(event,this.counter);
    
  }
  
  openDialog(valid: boolean,number : number) {
    this.valid = valid
    this.counter = number
    this.dialog.open(DialogComponent);
  }
}
