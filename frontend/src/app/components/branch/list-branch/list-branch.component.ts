import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import BranchFiltro from "../../../model/branch-filtro";
import Branch from "../../../model/branch";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BranchService} from "../../services/branch-service";
import {MatDialog} from "@angular/material/dialog";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {FiltroComponentComponent} from "../../filtro-component/filtro-component.component";

type TypeTableConfig = {
    page: number,
    limit: number,
    totalElements: number,
    endedElements: boolean,
    searchParam: BranchFiltro,
    total: number,

}

@Component({
    selector: 'app-list-branch',
    templateUrl: './list-branch.component.html',
    styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent implements OnInit {
    @Output() componentNavigation = new EventEmitter<{ component: string, data?: any }>();
    @Input() branchs: Branch[] = [];
    @Input() dataSource: Branch[] = [];
    @Input() loadingList: boolean = true;
    @Output() loadBranchListData = new EventEmitter<{ page: number, searchParam: BranchFiltro }>();
    @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
    @ViewChild(MatSort) sort: MatSort | undefined;
    @Input() tableConfig: TypeTableConfig = {
        page: 0,
        limit: 0,
        totalElements: 0,
        endedElements: false,
        searchParam: new BranchFiltro,
        total: 0

    };
    columns: string[] = ['id', 'cnpj', 'phone', 'action'];
    searchInput = "";
    ordenador = true;
    ordenadorContato = true;
    ordenadorCnpj = true;
    ordenadorId = true;
    branchFiltro = new BranchFiltro();


    /**
     * Neste construtuor passamos constantes para a busca de ordenação
     * @param authService
     * @param branch
     * @param dialog
     */
    constructor(private branch: BranchService, public dialog: MatDialog) {
        this.branchFiltro.cnpjAsc = "cnpj&order=asc";
        this.branchFiltro.cnpjDesc = "cnpj&order=desc";
        this.branchFiltro.contatoAsc = "phone&order=asc";
        this.branchFiltro.contatoDesc = "phone&order=desc";
        this.branchFiltro.idAsc = "id&order=asc";
        this.branchFiltro.idDesc = "id&order=desc";
    }

    /**
     * No onInit chama o metodo do component Principal para fazer a busca da api e chamar a listagem
     * @author Mauricio
     */
    ngOnInit(): void {
        this.loadBranchListData;

        this.columns = JSON.parse(<string>this.branch.getPosicaoTableBranch());
        if (this.columns == null) {
            this.columns = ['id', 'cnpj', 'phone', 'action']
        }
    }

    /**
     * DROP para alinhamento da tabela ao acessar o metodo irá mudar a ordem dos components
     *
     * @param event
     */
    drop(event: CdkDragDrop<Branch[]>) {

        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
        var convertColunToJson = JSON.stringify(this.columns);
        this.branch.setPosicaoTableBranch(convertColunToJson);

    }

    /**
     * Ao clicar na coluna da tabela a ordem pode ser feita cresente ou decrescente
     */
    ordenarCnpj() {
        if (this.branchFiltro.ordenador) {
            this.ordenadorCnpj = false;
            this.ordenadorContato = true;
            this.ordenadorId = true;
            this.branchFiltro.searchInput = this.branchFiltro.cnpjAsc;
            this.branchFiltro.ordenador = false;
            this.loadBranchListData.emit({page: 0, searchParam: this.branchFiltro});
        } else {
            this.ordenadorCnpj = false;
            this.ordenadorContato = true;
            this.ordenadorId = true;
            this.branchFiltro.ordenador = true;
            this.branchFiltro.searchInput = this.branchFiltro.cnpjDesc;
            this.loadBranchListData.emit({page: 0, searchParam: this.branchFiltro});
        }

        this.paginator!.pageIndex = 0;
    }

    /**
     * Ao clicar na coluna da tabela a ordem pode ser feita cresente ou decrescente
     */
    ordenarContato() {
        if (this.branchFiltro.ordenador) {
            this.ordenadorCnpj = true;
            this.ordenadorContato = false;
            this.ordenadorId = true;

            this.branchFiltro.ordenador = false;
            this.branchFiltro.searchInput = this.branchFiltro.contatoAsc;
            this.loadBranchListData.emit({page: 0, searchParam: this.branchFiltro});
        } else {
            this.ordenadorCnpj = true;
            this.ordenadorContato = false;
            this.ordenadorId = true;
            this.branchFiltro.ordenador = true;
            this.branchFiltro.searchInput = this.branchFiltro.contatoDesc;
            this.loadBranchListData.emit({page: 0, searchParam: this.branchFiltro});
        }

        this.paginator!.pageIndex = 0;
    }

    /**
     * Ao clicar na coluna da tabela a ordem pode ser feita cresente ou decrescente
     */
    ordenarId() {
        if (this.branchFiltro.ordenador) {
            this.ordenadorCnpj = true;
            this.ordenadorContato = true;
            this.ordenadorId = false;
            this.branchFiltro.ordenador = false;
            this.branchFiltro.searchInput = this.branchFiltro.idAsc;
            this.loadBranchListData.emit({page: 0, searchParam: this.branchFiltro});

        } else {
            this.ordenadorCnpj = true;
            this.ordenadorContato = true;
            this.ordenadorId = false;
            this.branchFiltro.searchInput = this.branchFiltro.idDesc;
            this.branchFiltro.ordenador = true;
            this.loadBranchListData.emit({page: 0, searchParam: this.branchFiltro});

        }

        this.paginator!.pageIndex = 0;
    }

    /**
     * Faz a navegação do componente de listagem para o de criação, caso seja editar é passado os parametros
     *
     * @param component
     * @param data
     */
    navigateTo(component: string, data?: any) {
        this.componentNavigation.emit({component, data: data || undefined});
    }

    /**
     * Metodo para consulta ao digitar um parametro no inpult é passado para o
     * @var loadListData onde é passado os parametros para consulta
     */
    handleSearch() {
        this.branchFiltro.input = this.searchInput;
        this.loadBranchListData.emit({page: 0, searchParam: this.branchFiltro});
        this.paginator!.pageIndex = 0;
    }

    /**
     * Paginação, ao clicar no icone é feito a transição da pagina
     * @param $event
     */
    handlePagination($event: PageEvent) {
        this.loadBranchListData.emit({page: $event.pageIndex, searchParam: this.branchFiltro});
    }

    /**
     * Filtro para consulta
     * antes de fazer a consulta no input é necessário informar o parametro a ser feito a consulta
     */
    filtro() {
        const dialog = this.dialog.open(FiltroComponentComponent, {
            data: {
                filtros: [
                    {label: 'CNPJ', value: 'cnpj'},
                    {label: 'Inscrição Estadual', value: 'ie'},
                    {label: 'Branch Pipa', value: 'branch_pipa'},
                    {label: 'Descrição', value: 'description'},
                    {label: 'Telefone', value: 'phone'},
                    {label: 'Endereço', value: 'address'},
                    {label: 'Cep', value: 'zip'},
                    {label: 'Número', value: 'number'},
                    {label: 'Complemento', value: 'complement'}
                ]
            }
        });
        dialog.afterClosed().subscribe(response => {
            if (response) {
                this.branchFiltro.campo = response;
            }
        });
    }

    /**
     * Remove o filtro de busca, após o filtro selecionado ao clicar em cima do filtro o mesmo é apagado
     */
    removerFiltro() {
        this.branchFiltro.campo = "";
    }
}
