import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { CreateTask, DeleteTask, FetchTasksSuccess, GetTasks, UpdateTask } from 'src/app/store/actions/task.action';
import { selectTasksList } from 'src/app/store/selectors/task.selector';
import { AppState } from 'src/app/store/states/app.state';
import { Task } from 'src/app/store/states/task.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {
  public description: string = '';
  public tasks$: Observable<Task[]> = this._store.pipe(select(selectTasksList));

  constructor(private readonly _store: Store<AppState>, private readonly subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.fecthTasks();
  }

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeComponent$.next();
  }

  public fecthTasks(): void {
    this._store.dispatch(new GetTasks()); 
  }

  public async createTask(): Promise<void> {
    const _createdDate: string = new Date().toString();
    this._store.dispatch(new CreateTask({ description: this.description, createdAt: _createdDate }));
    this.subscriptionService.unsubscribeComponent$.next();
    this.description = '';
  }

  public updateTask(task: Task): void {
    //Update completed field
    const updateTask: Task = {
      ...task,
      completed: true,
      updatedAt: new Date().toString(),
    }
    this._store.dispatch(new UpdateTask(updateTask));
    this.subscriptionService.unsubscribeComponent$.next();
  }

  public deleteTask(task: Task): void {
    this._store.dispatch(new DeleteTask(task));
    this.subscriptionService.unsubscribeComponent$.next();
  }

}

