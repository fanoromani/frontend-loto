export interface RaffleProps {
  id: number;
  nome: string;
}

export interface RaffleDataProps {
  loteriaId: number;
  concursoId: string;
}

export interface RaffleNumbersProps {
  data: string;
  id: string;
  loteria: number;
  numeros: string[];
}
