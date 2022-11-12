import { Dropdown } from "./Dropdown";
import logo from "../assets/logo.png";

export function Sidebar() {
  return (
    <>
      <div
        className="
  z bg-transparent
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
        <Dropdown />
        <div className="my-20 md:mt-0 flex items-center gap-6">
          <img src={logo} alt="" />
          <div className="font-bold text-3xl text-white">MEGA-SENA</div>
        </div>
        <div className="text-center md:text-left">
          <p className="font-medium text-white text-sm">CONCURSO</p>
          <p className="font-bold text-white text-xl mt-3">4531 – 07/04/2020</p>
        </div>

        <svg
          className="block md:hidden"
          preserveAspectRatio="none"
          width="auto"
          height="auto"
          viewBox="0 0 524 570"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: -1,
          }}
        >
          <path
            d="M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z"
            fill="#6BEFA3"
          />
        </svg>

        <svg
          className="hidden md:block"
          preserveAspectRatio="none"
          width="auto"
          height="100vh"
          viewBox="0 0 613 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: -1,
          }}
        >
          <path
            d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
            fill="#6BEFA3"
          />
        </svg>
      </div>
    </>
  );
}
