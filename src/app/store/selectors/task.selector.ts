import { createSelector } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { TaskState } from "../states/task.state";

const selectTasks = (state: AppState) => state.tasks;

export const selectTasksList = createSelector(
    selectTasks,
    (state: TaskState) => state.tasks
);