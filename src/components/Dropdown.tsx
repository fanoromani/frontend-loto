import * as Select from "@radix-ui/react-select";
import { RaffleProps } from "../types";

interface DropdownProps {
  raffles: RaffleProps[];
}

export function Dropdown({ raffles }: DropdownProps) {
  return (
    <Select.Root>
      <Select.Trigger className="w-52 bg-white py-3 px-4 rounded-lg font-medium text-font text-sm flex justify-between items-center">
        <Select.Value placeholder="CONCURSOS" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="text-font bg-white py-3 px-4 rounded text-sm flex justify-between relative z-30">
          <Select.ScrollUpButton />
          <Select.Viewport>
            {raffles.map((raffle) => (
              <Select.Item
                key={raffle.id}
                className="focus:cursor-default rounded-sm pl-1"
                value={raffle.nome}
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
