import { Empresa } from "./empresa";

export interface Setor {
    id?: number;
    nome: string;
    descricao: string;
    dataInicial: string;
    dataFinal?: string;
    cargos?: any[];
    colaboradores?: any[];
    actions?: string;
    empresa?: Empresa;
}
