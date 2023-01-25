import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })

  export class TaskFilterPipe implements PipeTransform{
    transform(tasks: { task: string, isClicked: boolean }[], filter: string, viewState: string): any {
        if (!filter && !viewState) {
            return tasks;
          }
          let filteredTasks = tasks;
          if (filter) {
            filteredTasks = filteredTasks.filter(task => task.task.toLowerCase().includes(filter.toLowerCase()));
          }
          if (viewState === 'active') {
            filteredTasks = filteredTasks.filter(task => !task.isClicked);
          }
          if (viewState === 'completed') {
            filteredTasks = filteredTasks.filter(task => task.isClicked);
          }
          return filteredTasks;
        }
    }
