export interface Empresa {
    id?: number;
    nome: string;
    cnpj: string;
    dataInicial: string;
    dataFinal?: string;
    setores?: number;
    cargos?: number;
    colaboradores?: number;
    actions?: string;
}
