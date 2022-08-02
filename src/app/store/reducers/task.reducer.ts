import { TaskActions, TaskActionsEnum } from "../actions/task.action";
import { initialTaskState, TaskState } from "../states/task.state";

export const taskReducer = (
    state = initialTaskState,
    action: TaskActions
): TaskState => {
    switch (action.type) {
        case TaskActionsEnum.GetTasks: {
            return state
        }
        case TaskActionsEnum.FetchTasksSuccess: {
            return {
                ...state,
                tasks: action.payload
            }
        }
        case TaskActionsEnum.UpdateTask: {
            //TODO: Make the update and communicate to Firebase
            return state
        }
        case TaskActionsEnum.DeleteTask: {
            //TODO: Make the update and communicate to Firebase
            return state
        }
        case TaskActionsEnum.CreateTask: {
            //TODO: Make the update and communicate to Firebase
            return state
        }
        default:
            return state;
    }
}