import { ActionReducerMap, createReducer } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { taskReducer } from "./task.reducer";
import { toastReducer } from "./toast.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {
    tasks: taskReducer,
    toast: toastReducer
}