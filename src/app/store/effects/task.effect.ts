import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, of, switchMap } from "rxjs";
import { TaskService } from "src/app/services/task.service";
import { FetchTasksSuccess, TaskActionsEnum } from "../actions/task.action";

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
    )

    constructor(private actions$: Actions, private taskService: TaskService) { }
}