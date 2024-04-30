import { HiOutlineBars3 } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { FaHandHoldingWater } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="w-full h-2/12 bg-gray-100 flex gap-4 p-4 pl-8 items-center justify-between shadow-md sticky">
      <div className="flex items-center gap-3">
        <FaHandHoldingWater className="text-cyan-500 size-10" />
        <div className="flex gap-8">
          <h1 className="text-cyan-500 font-bold">SomeApp</h1>
          <div className="hidden lg:block lg:flex lg:gap-4 md:block md:flex md:gap-4">
            <a className="text-cyan-500 font-semibold">ACESSAR TÓPICOS</a>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <SiGithub className="text-cyan-500 size-8" />
        <HiOutlineBars3 className="text-cyan-500 size-10" />
      </div>
    </div>
  );
}
