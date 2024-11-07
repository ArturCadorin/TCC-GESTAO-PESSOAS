export interface Cargo {
    id?: number;
    nome: string;
    descricao: string;
    dataInicial: string;
    dataFinal?: string;
    setor?: string;
    colaboradores?: number;
    empresa?: string;
}
