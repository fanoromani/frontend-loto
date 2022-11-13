import { Ball } from "./Ball";
import { RaffleNumbersProps } from "../types";

interface BallSorterProps {
  raffleNumbers: RaffleNumbersProps;
}

export function BallSorter({ raffleNumbers }: BallSorterProps) {
  return (
    <div className="w-full pb-20 md:pb-0 mt-[-64px] bg-background flex flex-wrap gap-6 lg:mr-14 justify-center items-center">
      {raffleNumbers.numeros.map((number) => (
        <Ball number={number} />
      ))}
    </div>
  );
}
