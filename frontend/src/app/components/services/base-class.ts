import {Directive, OnInit} from '@angular/core';
import {Constantes} from "../../model/constantes";


@Directive()
export class BaseClass implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }

    getErrorMessage(form: any, field: any) {
        if (form.get(field).hasError('required')) {
            return Constantes.erroCampoObrigatorio;
        } else if (form.get(field).hasError('branch_pipa')) {
            return Constantes.branch_pipa;
        } else if (form.get(field).hasError('description')) {
            return Constantes.description;
        } else if (form.get(field).hasError('address')) {
            return Constantes.address;
        } else if (form.get(field).hasError('zip')) {
            return Constantes.zip;
        } else if (form.get(field).hasError('cnpj')) {
            return Constantes.cnpj;
        } else if (form.get(field).hasError('complement')) {
            return Constantes.complement;
        } else if (form.get(field).hasError('number')) {
            return Constantes.number;
        } else if (form.get(field).hasError('rn')) {
            return Constantes.rn;
        } else if (form.get(field).hasError('minlength')) {
            const tamanho: number = form.get(field).errors['minlength'].requiredLength;
            return "Mínimo de " + tamanho + " caracteres";
        } else if (form.get(field).hasError('maxlength')) {
            const tamanho: number = form.get(field).errors['maxlength'].requiredLength;
            return "Máximo de " + tamanho + " caracteres";
        }
        return '';
    }
}
