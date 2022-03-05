export default class BranchFiltro {
    cnpjAsc?: string;
    cnpjDesc?: string;
    contatoAsc?: string;
    contatoDesc?: string;
    idAsc?: string;
    idDesc?: string;
    ordenadorCnpj?: boolean;
    ordenadorContato?: boolean;
    ordenadorId?: boolean;
    searchInput?: string;
    ordenador?: boolean;
    campo?: any;
    input?: string;
    iconeOrdenador?: boolean;

    constructor(
        cnpjAsc?: string,
        cnpjDesc?: string,
        contatoAsc?: string,
        contatoDesc?: string,
        idAsc?: string,
        idDesc?: string,
        ordenadorCnpj?: true,
        ordenadorContato?: true,
        ordenadorId?: true,
        searchInput?: '',
        ordenador?: boolean,
        campo?: any,
        input?: string,
        iconeOrdenador?: boolean
    ) {
        this.cnpjAsc = cnpjAsc;
        this.cnpjDesc = cnpjDesc;
        this.contatoAsc = contatoAsc;
        this.contatoDesc = contatoDesc;
        this.idAsc = idAsc;
        this.idDesc = idDesc;
        this.ordenadorCnpj = ordenadorCnpj;
        this.ordenadorContato = ordenadorContato;
        this.ordenadorId = ordenadorId;
        this.searchInput = searchInput;
        this.ordenador = ordenador;
        this.iconeOrdenador = iconeOrdenador
        this.campo = campo;
        this.input = input;
    }

}
