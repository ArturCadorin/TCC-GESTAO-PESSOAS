export interface Matriculas{
    id?: number;
    nome: string;
    nascimento: string;
    cpf: string;
    rg: string;
    sexo: string;
    empresa?: string;
    dataAdmissao: string;
    dataFinal?: string;
    setor?: string;
    cargos?: number;
    situacaoColaborador?: string;
    remuneracao?: number; 
}