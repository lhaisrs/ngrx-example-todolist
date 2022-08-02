import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { GetTasks } from 'src/app/store/actions/task.action';
import { selectTasksList } from 'src/app/store/selectors/task.selector';
import { AppState } from 'src/app/store/states/app.state';
import { Task } from 'src/app/store/states/task.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<boolean> = new Subject();
  public description: string = '';
  public tasks$: Observable<Task[]> = this._store.pipe(select(selectTasksList)); 

  constructor(private readonly _store: Store<AppState>) { }

  ngOnInit(): void {
    this.readTasks();
   }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public readTasks(): void {
   //this.tasks = this.service.fetch().valueChanges();
   this._store.dispatch(new GetTasks());
  }

  public async createTask(): Promise<void> {
    const _createdDate: string = new Date().toString();
    //await this.service.create(this.description, _createdDate);
    this.description = '';
  }

  public updateTask(task: Task): void {
    //Update completed field
    task.completed = true;
    task.updatedAt = new Date().toString();
    //this.service.update(task);
  }

  public deleteTask(task: Task): void {
    //this.service.delete(task);
  }

  // private transformDate(date?: string): string {
  //   return moment(date).format('dddd, HH:mm')
  // }

}

