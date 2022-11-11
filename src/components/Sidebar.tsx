import { Dropdown } from "./Dropdown";
import LogoSena from "../assets/logoSena.png";

export function Sidebar() {
  return (
    <div className="h-2/3 bg-bottom bg-cover bg-sidebarMobile flex flex-col items-center md:min-w-[613px] md:pl-24 md:py-24 md:flex md:flex-col md:items-start md:justify-between md:h-screen md:bg-sidebar">
      <Dropdown />
      <div className="my-20 md:mt-0 flex items-center gap-6">
        <img src={LogoSena} alt="" />
        <div className="font-bold text-3xl text-white">MEGA-SENA</div>
      </div>
      <div className="text-center md:text-left">
        <p className="font-medium text-white text-sm">CONCURSO</p>
        <p className="font-bold text-white text-xl mt-3">4531 – 07/04/2020</p>
      </div>
    </div>
  );
}
