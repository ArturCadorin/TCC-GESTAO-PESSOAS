export interface Setor {
    id?: number;
    nome: string;
    descricao: string;
    dataInicial: string;
    dataFinal?: string;
    cargos?: number;
    colaboradores?: number;
    actions?: string;
    empresa?: string;
}
