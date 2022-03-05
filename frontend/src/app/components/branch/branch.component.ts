import {Component, Input, OnInit} from '@angular/core';
import Branch from "../../model/branch";
import BranchFiltro from "../../model/branch-filtro";
import {BranchService} from "../services/branch-service";
import {findIndex} from 'lodash';

type TypeComponentNavigation = {
    component: string;
    data?: any;
    addNewBranchToList?: {};
    updateBranchInList?: Branch;
    removeBranchInList?: Branch;
}

type TypeTableConfig = {
    page: number,
    limit: number,
    totalElements: number,
    endedElements: boolean,
    searchParam: BranchFiltro,
    total: number
}

const INITIAL_TABLECONFIG: TypeTableConfig = {
    page: 0,
    limit: 10,
    totalElements: 0,
    endedElements: false,
    searchParam: new BranchFiltro(),
    total: 0,
};

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

    @Input() branchsRetorno: Branch[] = [];
    verificadorPrimeiroAcess = true;
    ordenadorIcon = true;
    activeComponent = "list-branch";
    dataToComponent?: any;
    navigationHistory: TypeComponentNavigation[] = [{component: 'list-branch'}];

    // list
    loadingList: boolean = false;
    branchs: Branch[] = [];
    tableConfig: TypeTableConfig = INITIAL_TABLECONFIG;

    constructor(
        private branchService: BranchService,
    ) {
    }


    ngOnInit(): void {
        this.branchs = this.branchsRetorno;
        this.loadBranchListData();
    }

    //metodo que realizará a ação de navegar entre os componentes
    componentNavigation(value: TypeComponentNavigation) {
        //ao navegar entre componentes, ele irá alterar o data, que é utilizado para passar para os componentes
        this.dataToComponent = undefined;
        //verificará e realizará as ações na navegação
        this.componentNavigationActions(value);
        this.activeComponent = value.component;
    }

    //metodo utilizado para um possivel botão "voltar", que voltará ao componente anterior a partir do history
    componentNavigationBack() {
        let last: TypeComponentNavigation = this.navigationHistory[1];
        if (last !== undefined) {
            let value: TypeComponentNavigation = {component: last.component};
            if (last.data != undefined) value.data = last.data;
            this.componentNavigation(value);
        }
    }

    loadBranchListData(value: { page: number, searchParam: any } = {page: 0, searchParam: undefined}) {
        let parametro = "";
        let tempTableConfig = this.tableConfig;
        if (value.searchParam !== undefined) {
            if (value.searchParam !== tempTableConfig.searchParam) {
                tempTableConfig.searchParam = value.searchParam;
                tempTableConfig.page = value.page;
                tempTableConfig.totalElements = 0;
            }
        }
        if (!this.verificadorPrimeiroAcess) {
            if (tempTableConfig.searchParam.campo) {
                parametro += tempTableConfig.searchParam.campo.value + "&search=" + tempTableConfig.searchParam.input;
            } else {
                if (tempTableConfig.searchParam.searchInput) {
                    parametro += tempTableConfig.searchParam.searchInput;
                }

            }
        } else {
            this.verificadorPrimeiroAcess = false;
            this.ordenadorIcon = false;
        }
        if (!this.loadingList) {
            this.loadingList = true;
            let currentPage = value.page + 1;
            this.branchService.getBranchsList(currentPage, tempTableConfig.limit, parametro).subscribe(response => {

                this.branchs = response;
                tempTableConfig.totalElements = response.to + 1;
                if (response.next_page_url != null) {
                    tempTableConfig.page = response.current_page + 1;
                }
                this.tableConfig.total = response.total;


            }, () => {
            }, () => {
                this.tableConfig = tempTableConfig;
                this.loadingList = false;
            });
        }
    }

    search(value: { page: number, searchParam: any } = {page: 0, searchParam: undefined}) {

    }

    /* Metodo que trata as possiveis ações que podem ocorrer ao navegar entre os componentes
    * Historico de navegação, adicionar item, atualiazr item e remover item
    * */
    private componentNavigationActions(value: TypeComponentNavigation) {
        //irá adicionar o atual componente no history de navegações
        let historyObj: TypeComponentNavigation = {component: value.component};
        //verfiica se há data à ser transportada entre a navegação e rá setar no dataToComponent e objeto de history
        if (value.data != undefined) {
            this.dataToComponent = value.data;
            historyObj.data = value.data;
        }
        //irá inserir o item na lista de historico
        this.navigationHistory.unshift(historyObj);

        //caso a ação seja addNew, irá adicionar o item no topo
        if (value.addNewBranchToList !== undefined) {
            this.branchs.unshift(value.addNewBranchToList);
            let tempTableConfig = this.tableConfig.totalElements;
            this.tableConfig.totalElements = tempTableConfig + 1;
        }


        //caso a ação seja remove, irá encontrar o item e remove-lo da lista
        if (value.removeBranchInList !== undefined) {
            let tempBranchs = this.branchs;
            let index = findIndex(tempBranchs, {id: value.removeBranchInList.id});
            tempBranchs.splice(index, 1);
            this.branchs = tempBranchs;
            let tempTableConfig = this.tableConfig.totalElements;
            this.tableConfig.totalElements = tempTableConfig - 1;
            this.tableConfig.total = this.tableConfig.total - 1;
        }
    }

    private changeLoading(bool: boolean) {
        this.loadingList = bool;
    }

}
