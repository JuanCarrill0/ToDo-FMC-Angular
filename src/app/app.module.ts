import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskFilterPipe } from '../../../ToDo-FrontendMentorChallengue/src/app/task-filter.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    AppComponent,
    TaskFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DragDropModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}