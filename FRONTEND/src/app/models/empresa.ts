import { Setor } from "./setor";

export interface Empresa {
    id?: number;
    nome: string;
    cnpj: string;
    dataInicial: string;
    setores?: Setor[];
    cargos?: any[];
    colaboradores?: any[];
    actions?: string;
}
