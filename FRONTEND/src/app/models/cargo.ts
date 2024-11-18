import { Empresa } from "./empresa";
import { Setor } from "./setor";

export interface Cargo {
    id?: number;
    nome: string;
    descricao: string;
    dataInicial: string;
    dataFinal?: string;
    setor?: Setor;
    colaboradores?: any[];
    empresa?: Empresa;
}
