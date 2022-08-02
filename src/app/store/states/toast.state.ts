export interface ToastState {
    toast: {
        description: string;
        title: string;
    }
}

export const initialToastState: ToastState = {
    toast: {
        description: '',
        title: ''
    }
}