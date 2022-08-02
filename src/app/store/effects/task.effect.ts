import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap, takeUntil } from "rxjs";
import { SubscriptionService } from "src/app/services/subscription.service";
import { TaskService } from "src/app/services/task.service";
import { CreateTask, DeleteTask, FetchTasksSuccess, TaskActionsEnum, UpdateTask } from "../actions/task.action";

@Injectable()
export class TaskEffects {
    fetchTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActionsEnum.FetchTasksSuccess),
            switchMap(() => this.taskService.fetch().pipe(
                map(tasks => new FetchTasksSuccess(tasks)),
                catchError(() => EMPTY)
            ))
        )
    );

    updateTask$ = createEffect(() => this.actions$.pipe(
        ofType(TaskActionsEnum.UpdateTask),
        switchMap((action: UpdateTask) => this.taskService.update(action.payload).pipe(
            takeUntil(this.subscriptionService.unsubscribe$),
            map(() => new UpdateTask(null)),
            catchError(() => EMPTY)
        ))
    ));

    createTask$ = createEffect(() => this.actions$.pipe(
        ofType(TaskActionsEnum.CreateTask),
        switchMap((action: CreateTask) => this.taskService.create(action.payload).pipe(
            takeUntil(this.subscriptionService.unsubscribe$),
            map(() => new CreateTask({ description: '', createdAt: '' })),
            catchError(() => EMPTY)
        ))
    ));

    deleteTask$ = createEffect(() => this.actions$.pipe(
        ofType(TaskActionsEnum.DeleteTask),
        switchMap((action: DeleteTask) => this.taskService.delete(action.payload).pipe(
            takeUntil(this.subscriptionService.unsubscribe$),
            map(() => new DeleteTask(null)),
            catchError(() => EMPTY)
        ))
    ));

    constructor(private actions$: Actions, private taskService: TaskService, private subscriptionService: SubscriptionService) { }
}