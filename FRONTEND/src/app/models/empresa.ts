export interface Empresa {
    id?: number;
    nome: string;
    cnpj: string;
    dataInicial: string;
    setores?: any[];
    cargos?: any[];
    colaboradores?: any[];
    actions?: string;
}
