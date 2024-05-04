import { SiGithub } from "react-icons/si";
import { MdForum } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="w-full h-2/12 bg-slate-700 flex gap-4 p-4 pl-8 items-center justify-between shadow-md sticky">
      <div className="flex items-center gap-3">
        <MdForum className="text-cyan-500 size-10" />
        <div className="flex gap-8 items-center">
          <h1 className="text-slate-200 text-xl font-bold">ForumDev</h1>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <a href="https://github.com/diogoferreira519" target="_blank">
          <SiGithub className="text-cyan-500 size-8 transition-all duration-300 hover:size-10" />
        </a>
      </div>
    </div>
  );
}
