export interface Task {
    id: string;
    createdAt: string;
    description: string;
    updatedAt?: string;
    completed: boolean;
}

export interface TaskState {
    tasks: Task[];
}

export const initialTaskState: TaskState = {
    tasks: []
};