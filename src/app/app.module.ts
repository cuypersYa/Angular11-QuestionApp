import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/** services */
import { HttpClientModule } from '@angular/common/http';

/** material */
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import {MatDialogModule} from '@angular/material/dialog';


/** custom */
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { UserComponent } from './user/user.component';
import { DialogComponent } from './dialog/dialog.component';
import { AnswerComponent } from './answer/answer.component';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    QuestionComponent,
    ResultComponent,
    UserComponent,
    DialogComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
