import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubscriptionService } from './services/subscription.service';
import { FetchTasksSuccess } from './store/actions/task.action';
import { AppState } from './store/states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-example-todolist';

  constructor(private readonly _store: Store<AppState>, private readonly subscriptionService: SubscriptionService) { }

  public ngOnDestroy(): void {
    this.subscriptionService.unsubscribeComponent$.next();
  }

  public ngOnInit(): void {
    this._store.dispatch(new FetchTasksSuccess([]));
  }

}
