import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
    title: string;
    message: string;
    filtros: any[];
}

@Component({
    selector: 'app-filtro-component',
    templateUrl: './filtro-component.component.html',
    styleUrls: ['./filtro-component.component.css']
})
export class FiltroComponentComponent implements OnInit {

    filtroSelecionado: any = null;
    filtros: any[] = [];

    constructor(
        public dialogRef: MatDialogRef<FiltroComponentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {

    }

    ngOnInit() {
        this.filtros = this.data.filtros;

    }

    onConfirm(): void {
        // Close the dialog, return true
        this.dialogRef.close(this.filtroSelecionado);
    }

    onDismiss(): void {
        // Close the dialog, return false
        this.dialogRef.close(null);
    }

}
