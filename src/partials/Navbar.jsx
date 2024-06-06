import { SiGithub } from "react-icons/si";
import { MdForum } from "react-icons/md";
import { useCookies } from "react-cookie";
export default function Navbar() {
  const [cookies, setCookie] = useCookies(["isAuth"]);
  return (
    <div className="w-full h-2/12 bg-slate-700 flex gap-4 p-4 pl-8 items-center justify-between shadow-md sticky">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <img src={cookies.isAuth.image} className="size-12 rounded-full" />
          <h2 className="font-bold text-white">{cookies.isAuth.user}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <MdForum className="text-cyan-500 size-10" />
        <h1 className="text-slate-200 text-xl font-extrabold">ForumDev</h1>
      </div>
      <div className="flex gap-8 items-center">
        <a href="https://github.com/diogoferreira519" target="_blank">
          <SiGithub className="text-cyan-500 size-8 transition-all duration-300 hover:size-10" />
        </a>
      </div>
    </div>
  );
}
