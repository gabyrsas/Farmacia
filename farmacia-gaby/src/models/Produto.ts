import { Categoria } from "./Categoria';

export interface Produtos {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  foto: string;
  categoria: Categoria | null;
  quantidade: number;
  laboratorio: string;
}