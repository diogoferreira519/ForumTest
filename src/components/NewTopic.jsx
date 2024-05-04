import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function NewTopic() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/addTopic");
      }}
      className="flex gap-2 items-center justify-center cursor-pointer w-3/4 bg-slate-700 p-4 mb-4 rounded-md transition-all duration-700 hover:scale-105 shadow-lg"
    >
      <IoIosAddCircle className="size-10 text-cyan-400" />
      <h2 className="text-white text-2xl">Adicionar tópico</h2>
    </div>
  );
}
