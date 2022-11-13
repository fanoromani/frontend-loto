import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { RaffleProps } from "../types";

interface DropdownProps {
  raffles: RaffleProps[];
  raffleData: any[];
  setRaffleID: Function;
}

export function Dropdown({ raffles, raffleData, setRaffleID }: DropdownProps) {
  const [valorTeste, setValorTeste] = useState<string>("");

  const handleRaffleSelect = (value: string) => {
    if (value !== "") {
      const loteriaTeste = raffleData.find(
        (e) => e.loteriaId === parseInt(value)
      ).concursoId;
      console.log(value, "amostrei");
      console.log(loteriaTeste, "amostrou");
    }
  };

  return (
    <Select.Root onValueChange={(value) => handleRaffleSelect(value)}>
      <Select.Trigger className="w-52 bg-white py-3 px-4 rounded-lg font-medium text-font text-sm flex justify-between items-center">
        <Select.Value placeholder="CONCURSOS" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="text-font bg-white py-3 px-4 rounded text-sm flex justify-between relative z-30">
          <Select.ScrollUpButton className="text-center bg-slate-200">
            ^
          </Select.ScrollUpButton>
          <Select.Viewport>
            {raffles.map((raffle) => (
              <Select.Item
                key={raffle.id}
                className="focus:cursor-default rounded-sm pl-1 hover:bg-slate-600 hover:text-white"
                value={raffle.id.toLocaleString()}
              >
                <Select.ItemText>{raffle.nome.toUpperCase()}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
