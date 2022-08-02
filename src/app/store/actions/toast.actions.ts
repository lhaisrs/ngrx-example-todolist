import { createAction, props } from "@ngrx/store";

export const toastSuccess = createAction(
    '[Toast Service] Display Toast Success',
    props<{ title: string; desription: string; }>()
);

export const toastError = createAction(
    '[Toast Service] Display Toast Error',
);
