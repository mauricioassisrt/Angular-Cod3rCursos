
export default class Branch {
    id?: number;
    rn?: string;
    branch_pipa?: string;
    description?: string | null;
    phone?: string | null;
    address?: string;
    zip?: string;
    cnpj?: string;
    ie?: string;
    number?: number;
    complement?: string;


    constructor(
        id?: number,
        branch_pipa?: string,
        description?: string,
        phone?: string,
        address?: string,
        zip?: string,
        cnpj?: string,
        ie?: string,
        number?: number,
        complement?: string,
        rn?: string,
    ) {
        this.id = id;
        this.branch_pipa = branch_pipa;
        this.description = description;
        this.phone = phone;
        this.address = address;
        this.zip = zip;
        this.cnpj = cnpj;
        this.ie = ie;
        this.number = number;
        this.complement = complement;
        this.rn = rn;
    }
}
