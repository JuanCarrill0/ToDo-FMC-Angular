import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDo';
  
  task:string = '';
  tasks: {task:string, isClicked:boolean}[] = [];

  public screenWidth: number = 0;
  public isDay: boolean = true;
  public isCheck: boolean = false;
  public dayClass: string = 'day-background';
  public nightClass: string = 'night-background';
  public unclickedTasksCount: number;

  public taskActiveBox : boolean = false;

  constructor(private win: Window){
    this.unclickedTasksCount = this.tasks.filter(task => !task.isClicked).length;;
  }


  ngOnInit() {
    this.screenWidth = this.win.innerWidth;
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

  filterTasks(task: { task: string, isClicked: boolean }, viewState: string) {
    if (viewState === 'all') {
       return true;
    } else if (viewState === 'active') {
       return !task.isClicked;
    } else if (viewState === 'completed') {
       return task.isClicked;
    }
    return true;
 }

  deletedTaskCompleted(){
    this.tasks = this.tasks.filter(task => !task.isClicked);
  }

  drop(event: CdkDragDrop<{task:string, isClicked:boolean}[]>){
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
