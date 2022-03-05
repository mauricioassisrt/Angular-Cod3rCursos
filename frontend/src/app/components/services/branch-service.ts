import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {setFilterParams} from "../../../util/paramsBuilder";
import Branch from "../../model/branch";

@Injectable({
    providedIn: 'root'
})
export class BranchService {

    /**
     * Rota da api
     * @private
     */
    private path = "branches";
    private this

    environment = "http://localhost:3001/"
    /**
     * CONSTANTE LOCAL STORAGE PARA ARMAZENAR A POSICAO DOS MENUS
     * @private
     */
    private ordenadorTable = "branch_order_table"

    constructor(private http: HttpClient) {
    }

    /**
     *
     * @param posicaoMenusBranch
     */
    setPosicaoTableBranch(posicaoMenusBranch: string) {
        localStorage.setItem(this.ordenadorTable, posicaoMenusBranch);
    }

    /**
     *  OBTEM A POSICAO DA TABELA A ORDENACAO
     */
    getPosicaoTableBranch() {
        return localStorage.getItem(this.ordenadorTable);
    }

    /**
     * Retorna todas as branchs paginadas
     * @param page
     * @param limit
     * @param param
     */
    getBranchsList(page: number, items: number, field?: string): Observable<any> {
        let params = setFilterParams({
            page,
            items,
            field
        });

        return this.http.get(`${this.environment}${this.path}${params}`);
    }

    /**
     * Retorna todas as branchs paginadas
     * @param page
     * @param limit
     * @param param
     */
    getSearch(page: number, items: number, field?: string): Observable<any> {
        let params = setFilterParams({
            page,
            items,
            field
        });

        return this.http.get(`${this.environment}${this.path}${params}`);
    }

    /**
     * Save branch
     * @param branch
     */
    save(branch: Branch): Observable<any> {
        return this.http.post(`${this.environment}${this.path}`, branch);
    }

    /**
     *
     *  Update branch
     * @param branch
     */
    editBranch(branch: Branch): Observable<any> {
        return this.http.put(`${this.environment}${this.path + "/" + branch.id + ""}`, branch);
    }

    /**
     *  apaga uma branch
     * @param branch
     */
    deleteBranch(branch: Branch): Observable<any> {

        return this.http.delete(`${this.environment}${this.path + "/" + branch.id + ""}`);
    }

    /**
     * get Profile por id
     * @param id
     */
    findBranchById(id: any): Observable<any> {
        return this.http.get(`${this.environment}${this.path + "/" + id + ""}`);
    }

}
