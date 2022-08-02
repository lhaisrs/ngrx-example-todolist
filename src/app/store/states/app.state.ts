import { initialTaskState, TaskState } from "./task.state";


export interface AppState {
    tasks: TaskState;
}

export const initialAppState: AppState = {
    tasks: initialTaskState
}

export function getInitialState(): AppState {
    return initialAppState;
}