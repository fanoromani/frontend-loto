import * as Select from "@radix-ui/react-select";

export function Dropdown() {
  return (
    <Select.Root>
      <Select.Trigger className="mt-10 md:mt-0 w-52 bg-white py-3 px-4 rounded-lg font-medium text-font text-sm flex justify-between items-center">
        <Select.Value placeholder="CONCURSOS" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="text-font bg-white py-3 px-4 rounded text-sm flex justify-between">
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item
              key={0}
              className="focus:cursor-default rounded-sm pl-1"
              value="MEGA-SENA"
            >
              <Select.ItemText>MEGA-SENA</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item
              key={1}
              className="focus:cursor-default rounded-sm pl-1"
              value="QUINA"
            >
              <Select.ItemText>QUINA</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item
              key={2}
              className="focus:cursor-default rounded-sm pl-1"
              value="LOTOMANIA"
            >
              <Select.ItemText>LOTOMANIA</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item
              key={3}
              className="focus:cursor-default rounded-sm pl-1"
              value="LOTOFÁCIL"
            >
              <Select.ItemText>LOTOFÁCIL</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
