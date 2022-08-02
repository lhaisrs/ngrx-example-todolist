import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { toastSuccess } from "../actions/toast.actions";
import { initialToastState, ToastState } from "../states/toast.state";

const _toastReducer = createReducer(initialToastState, on(toastSuccess, state => state));

export function toastReducer(state: any, action: any): ToastState {
    return _toastReducer(state, action);
}