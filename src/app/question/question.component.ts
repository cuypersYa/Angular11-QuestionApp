import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questions : Question[] = [] ;
  results : Array<string> = [] ; 

  constructor( private questionService : QuestionService) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  public getQuestions(){
    this.questionService.getQuestion()
    .subscribe(result => {

      this.questions = result ;
      this.defineAnwsers(this.questions);
    });
  }

  public defineAnwsers( questions : Question[]){
    for (let index = 0; index < questions.length; index++) {
      this.results.push(questions[index].answers[0]);      
    }
  }

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

}
