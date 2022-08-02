import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { switchMap, tap } from "rxjs";
import { toastError, toastSuccess } from "../actions/toast.actions";

@Injectable()
export class ToastEffect {
    toastSucess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(toastSuccess),
            tap((action) => this.toast.success(action.desription, action.title))
        ),
        { dispatch: false }
    )

    toastError$ = createEffect(() =>
        this.actions$.pipe(
            ofType(toastError),
            tap(() => this.toast.error())
        ),
        { dispatch: false }
    )

    constructor(private actions$: Actions, private toast: ToastrService) { }
}