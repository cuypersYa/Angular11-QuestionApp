import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** services */
import { HttpClientModule } from '@angular/common/http';

/** material */
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
/** custom */
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    QuestionComponent,
    ResultComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
