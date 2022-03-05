import {MatSnackBarConfig} from "@angular/material/snack-bar";

export default function snackBarConfig(status: string = "mat-success")  {
    let conf: MatSnackBarConfig = {
        panelClass: status,
        duration: 4000,
        horizontalPosition: "right",
        verticalPosition: "top",

    };

    return conf;
}
