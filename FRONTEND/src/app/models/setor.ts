import { Cargo } from "./cargo";
import { Empresa } from "./empresa";
import { Matriculas } from "./matriculas";

export interface Setor {
    id?: number;
    nome: string;
    descricao: string;
    dataInicial: string;
    dataFinal?: string;
    cargos?: any[];
    colaboradores?: Matriculas[];
    actions?: string;
    empresa?: Empresa;
}
