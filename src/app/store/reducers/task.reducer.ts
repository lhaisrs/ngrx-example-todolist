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
            return state
        }
        case TaskActionsEnum.DeleteTask: {
            return state
        }
        case TaskActionsEnum.CreateTask: {
            return state
        }
        default:
            return state;
    }
}