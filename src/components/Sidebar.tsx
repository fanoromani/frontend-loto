import { LogoSena } from "./LogoSena";

export function Sidebar() {
  return (
    <div className="w-[613px] pl-24 py-[92px] flex flex-col justify-between h-screen bg-sidebar bg-no-repeat">
      <div>DROPDOWN</div>
      <div className="flex items-center gap-6">
        <LogoSena />
        <div className="font-bold text-3xl text-white">MEGA-SENA</div>
      </div>
      <div>
        <div className="font-medium text-white text-sm">CONCURSO</div>
        <div className="font-bold text-white text-xl mt-3">
          4531 – 07/04/2020
        </div>
      </div>
    </div>
  );
}
