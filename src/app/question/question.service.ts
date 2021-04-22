import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from './question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionUrl = 'assets/questions.json';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http : HttpClient) { }

  /** GET Questions from the server */
  getQuestion(): Observable<Question[]> {
    console.log(this.http.get(this.questionUrl));
    return this.http.get<Question[]>(this.questionUrl)
      .pipe(
        tap(_ => this.log('fetched questions')),
        catchError(this.handleError<Question[]>('getQuestions', []))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log the message */
  private log(message: any) {
    console.log(`QuestionService: ${message.toString()}`, message);
  }
}
