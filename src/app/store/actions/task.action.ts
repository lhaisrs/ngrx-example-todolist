import { Action, createAction, props } from "@ngrx/store";
import { Task } from "../states/task.state";

export enum TaskActionsEnum {
    GetTasks = '[Task] Get Tasks',
    FetchTasksSuccess = '[Task] Fetch Tasks Success',
    UpdateTask = '[Task] Update Task',
    DeleteTask = '[Task] Delete Task',
    CreateTask = '[Task] Create Task'
}

export class GetTasks implements Action {
    public readonly type = TaskActionsEnum.GetTasks;
}

export class FetchTasksSuccess implements Action {
    public readonly type = TaskActionsEnum.FetchTasksSuccess;
    constructor(public payload: Task[]) {}
}

export class UpdateTask implements Action {
    public readonly type = TaskActionsEnum.UpdateTask;
    constructor(public payload: Task) {}
}

export class DeleteTask implements Action {
    public readonly type = TaskActionsEnum.DeleteTask;
    constructor(public payload: Task) {}
}

export class CreateTask implements Action {
    public readonly type = TaskActionsEnum.CreateTask;
    constructor(public payload: { description: string, createdAt: string }) {}
}

export type TaskActions = GetTasks | FetchTasksSuccess | UpdateTask | DeleteTask | CreateTask;


// export const updateTask = createAction('[Task] Update Tasks', props<TaskModel>);