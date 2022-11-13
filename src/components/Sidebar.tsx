import { Dropdown } from "./Dropdown";
import logo from "../assets/logo.png";
import { Background } from "./Background";
import { RaffleProps, RaffleDataProps } from "../types";

interface SidebarProps {
  raffles: RaffleProps[];
  handleRaffleSelect: Function;
  raffleID: string;
  raffleData: RaffleDataProps[];
}

export function Sidebar({
  raffles,
  handleRaffleSelect,
  raffleID,
  raffleData,
}: SidebarProps) {
  console.log(
    raffles.find((e) => e.id.toLocaleString() === raffleID)?.nome.toUpperCase()
  );

  return (
    <div
      className="
    h-3/4
    flex 
    flex-col 
    bg-cover
    bg-bottom
    bg-no-repeat
    items-center 
    pt-8
    md:bg-center
    md:min-w-[600px] 
    md:pl-24 
    md:py-24 
    md:flex 
    md:flex-col 
    md:items-start 
    md:justify-between 
    md:h-screen 
    z-10
    relative
    overflow-hidden
    "
    >
      <Dropdown raffles={raffles} handleRaffleSelect={handleRaffleSelect} />
      <div className="my-20 md:mt-0 flex items-center gap-6">
        <img src={logo} alt="" />
        <div className="font-bold text-3xl text-white">
          {raffles
            .find((e) => e.id.toLocaleString() === raffleID)
            ?.nome.toUpperCase()}
        </div>
      </div>
      <div className="text-center md:text-left">
        <p className="font-medium text-white text-sm">CONCURSO</p>
        <p className="font-bold text-white text-xl mt-3">4531 – 07/04/2020</p>
      </div>

      <Background raffles={raffles} raffleID={raffleID} />
    </div>
  );
}
