import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { taskReducer } from "./task.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {
    tasks: taskReducer
}