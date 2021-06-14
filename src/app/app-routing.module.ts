import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./start/start.component";
import { QuestionComponent } from "./question/question.component";
import { ResultComponent } from "./result/result.component";

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'vragen',
    component: QuestionComponent
  },
  {
    path: 'resultaat',
    component: ResultComponent
  } ,
  { path: '',   redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
