import { Cargo } from "./cargo";
import { Empresa } from "./empresa";
import { Setor } from "./setor";

export interface Matriculas{
    id?: number;
    nome: string;
    nascimento: string;
    cpf: string;
    rg: string;
    sexo: string;
    empresa?: Empresa;
    dataAdmissao: string;
    dataFinal?: string;
    setor?: Setor;
    cargos?: Cargo;
    situacaoColaborador?: string;
    remuneracao?: number; 
}