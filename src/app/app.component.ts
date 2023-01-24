import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo';
  
  task:string = '';
  tasks: {task:string, isClicked:boolean}[] = [];

  public isDay: boolean = true;
  public isCheck: boolean = false;
  public dayClass: string = 'day-background';
  public nightClass: string = 'night-background';
  public unclickedTasksCount: number;

  public taskActiveBox : boolean = false;

  constructor(){
    this.unclickedTasksCount = this.tasks.filter(task => !task.isClicked).length;;
  }

  public viewState: string = 'all';
  
  showAllTasks() {
    this.viewState = 'all';
  }
  showActiveTasks() {
    this.viewState = 'active';
  }

  showCompletedTasks() {
    this.viewState = 'completed';
  }

  public toggle(): void {
    this.isDay = !this.isDay;
  }

  onEnter() {
    this.tasks.push({task:this.task, isClicked: false});
    this.onTaskListUpdated();
    this.task = "";
  }

  onClick(index: number){
    this.tasks[index].isClicked = !this.tasks[index].isClicked;
    this.onTaskListUpdated();
    this.isCheck = !this.isCheck;
  }

  onTaskListUpdated(){
    this.unclickedTasksCount = this.tasks.filter(task => !task.isClicked).length;
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
    this.onTaskListUpdated();
  }

  taskActive():{task:string, isClicked:boolean}[]{
    this.taskActiveBox = !this.taskActiveBox;
    return this.tasks.filter(task => task.isClicked === false);
  }

}
