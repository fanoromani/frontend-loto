import { Dropdown } from "./Dropdown";
import { LogoSena } from "./LogoSena";

export function Sidebar() {
  return (
    <div className="bg-no-repeat bg-cover min-w-full bg-sidebarMobile flex flex-col items-center md:min-w-[613px] md:pl-24 md:py-24 md:flex md:flex-col md:items-start md:justify-between md:h-screen md:bg-sidebar">
      <Dropdown />
      <div className="flex items-center gap-6">
        <LogoSena />
        <div className="font-bold text-3xl text-white">MEGA-SENA</div>
      </div>
      <div>
        <p className="font-medium text-white text-sm">CONCURSO</p>
        <p className="font-bold text-white text-xl mt-3">4531 – 07/04/2020</p>
      </div>
    </div>
  );
}
