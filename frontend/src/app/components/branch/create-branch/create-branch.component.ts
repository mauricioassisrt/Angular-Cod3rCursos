import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import Branch from "../../../model/branch";
import {BranchService} from "../../services/branch-service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import snackBarConfig from "../../util/snackBarConfig";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";
import {BaseClass} from "../../services/base-class";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {isEmpty} from "lodash";
type TypeComponentNavigation = {
    component: string;
    data?: any;
    addNewBranchToList?: {};
    updateBranchInList?: {};
    removeBranchInList?: {};
  
  }
  

@Component({
    selector: 'app-create-branch',
    templateUrl: './create-branch.component.html',
    styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent extends BaseClass implements OnInit {
    @Output() componentNavigation = new EventEmitter<TypeComponentNavigation>();
    @Output() componentNavigationBack = new EventEmitter();
    @Output() handleDeleteBranch = new EventEmitter();
    @Input() editData: any = {};
  
  
    pageTitle: string = "Cadastro de Nova Filial";
    isEdit: boolean = false;
    loading: boolean = false;
    form = this.formBuilder.group({
      branch_pipa: [null, Validators.required],
      description: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      zip: [null, Validators.required],
      cnpj: [null, Validators.required],
      ie: [null, Validators.required],
      number: [null, Validators.required],
      complement: [null, Validators.required],
      rn: [null, Validators.required],
    });
    branch: Branch = new Branch();
  
  
    constructor(
      public branchService: BranchService,
      public dialog: MatDialog,
      private _snackBar: MatSnackBar,
  
      private formBuilder: FormBuilder,
    ) {
      super();
    }
  
    override ngOnInit(): void {
  
      this.isEdit = !isEmpty(this.editData) && this.editData.id;
      if (this.isEdit) {
        this.pageTitle = "Editar Filial ";
        //setar os valores já existentes na edição para o ngModel
        this.branch = this.editData;
        this.form.get('branch_pipa')?.setValue(this.branch.branch_pipa)
        this.form.get('description')?.setValue(this.branch.description)
        this.form.get('phone')?.setValue(this.branch.phone)
        this.form.get('address')?.setValue(this.branch.address)
        this.form.get('zip')?.setValue(this.branch.zip)
        this.form.get('cnpj')?.setValue(this.branch.cnpj)
        this.form.get('ie')?.setValue(this.branch.ie)
        this.form.get('number')?.setValue(this.branch.number)
        this.form.get('complement')?.setValue(this.branch.complement)
        this.form.get('rn')?.setValue(this.branch.rn)
      }
  
    }
  
    override getErrorMessage(form: any, field: any) {
      if (!form) {
        form = this.form;
      }
      return super.getErrorMessage(form, field);
    }
  
    //emitir o evento para navegar para o componente anterior
    navigateBack() {
      this.componentNavigationBack.emit();
    }
  
    handleDelete() {
      const dialog = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "500px",
        data: {
          title: "Excluir",
          message: "Confirma a exclusão do registro?"
        }
      });
  
      dialog.afterClosed().subscribe(response => {
        if (response) {
          this.branchService.deleteBranch(this.branch).subscribe(response => {
            this._snackBar.open(response.message, 'Apagado', snackBarConfig())
            this.componentNavigation.emit({
  
              component: 'list-branch',
              removeBranchInList: this.branch
            });
          })
        }
      });
    }
  
    onSubmit() {
      if (this.isEdit) {
        if (!this.form.valid) {
          this._snackBar.open("Existe campos sem preenchimento!!", '', snackBarConfig())
        } else {
          this.branch.branch_pipa = this.form.get('branch_pipa')?.value;
          this.branch.description = this.form.get('description')?.value;
          this.branch.phone = this.form.get('phone')?.value;
          this.branch.address = this.form.get('address')?.value;
          this.branch.zip = this.form.get('zip')?.value;
          this.branch.cnpj = this.form.get('cnpj')?.value;
          this.branch.ie = this.form.get('ie')?.value;
          this.branch.number = this.form.get('number')?.value;
          this.branch.complement = this.form.get('complement')?.value;
          this.branch.rn = this.form.get('rn')?.value;
          this.branchService.editBranch(this.branch).subscribe(response => {
            this._snackBar.open(response.message, '', snackBarConfig())
            this.componentNavigation.emit({
              component: 'list-branch',
              updateBranchInList: response.data
            });
            this.branch = response;
          })
        }
  
      } else {
        if (!this.form.valid) {
          this._snackBar.open("Existe campos sem preenchimento!!", '', snackBarConfig())
        } else {
  
          this.branch = new Branch();
          this.branch.branch_pipa = this.form.get('branch_pipa')?.value;
          this.branch.description = this.form.get('description')?.value;
          this.branch.phone = this.form.get('phone')?.value;
          this.branch.address = this.form.get('address')?.value;
          this.branch.zip = this.form.get('zip')?.value;
          this.branch.cnpj = this.form.get('cnpj')?.value;
          this.branch.ie = this.form.get('ie')?.value;
          this.branch.number = this.form.get('number')?.value;
          this.branch.complement = this.form.get('complement')?.value;
          this.branch.rn = this.form.get('rn')?.value;
  
          this.branchService.save(this.branch).subscribe(response => {
            this._snackBar.open(response.message, '', snackBarConfig())
            this.componentNavigation.emit({
              component: 'list-branch',
              addNewBranchToList: response
            });
            this.branch = response;
            this.isEdit = true;
          })
        }
  
      }
    }
  

}
