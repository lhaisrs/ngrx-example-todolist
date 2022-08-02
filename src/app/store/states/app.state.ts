import { initialTaskState, TaskState } from "./task.state";
import { initialToastState, ToastState } from "./toast.state";


export interface AppState {
    tasks: TaskState;
    toast: ToastState
}

export const initialAppState: AppState = {
    tasks: initialTaskState,
    toast: initialToastState
}

export function getInitialState(): AppState {
    return initialAppState;
}