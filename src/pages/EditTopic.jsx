import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

export default function EditTopic() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [name, setName] = useState();
  let [profile_picture, setProfile_picture] = useState();
  useEffect(() => {
    const baseUrl = `https://api-forum-ef2ae-default-rtdb.asia-southeast1.firebasedatabase.app/topics/${id}.json`;
    fetch(`${baseUrl}`)
      .then((data) => data.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setProfile_picture(data.profile_picture);
        setName(data.profile_name);
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();
  const baseUrl = `https://api-forum-ef2ae-default-rtdb.asia-southeast1.firebasedatabase.app`;

  const EditTopicFunc = () => {
    if (title.length <= 1 && description.length <= 1) {
      alert("Não pode deixar os campos vazios!");
      return;
    } else if (title.length <= 1) {
      alert("Não pode deixar o titulo vazio");
      return;
    } else if (description.length <= 1) {
      alert("Não pode deixar a descrição vazia");
      return;
    }
    const editActualTopic = {
      comments: "0",
      title,
      description,
      id: id,
      likes: "0",
      profile_name: name,
      profile_picture: profile_picture,
    };
    console.log(editActualTopic);
    fetch(`${baseUrl}/topics/${id}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editActualTopic),
    })
      .then(() => navigate("/topics"))
      .catch((error) => console.error("Erro ao Atualizar tópico:", error));
  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-full bg-gradient-to-b from-cyan-500 to-slate-700 pt-8">
        <div className="pb-4 pl-8">
          <IoArrowBackCircle
            onClick={() => navigate("/topics")}
            className="size-12 text-slate-700 cursor-pointer transition-all duration-500 hover:text-white"
          />
        </div>

        <div
          className={`rounded-md shadow-lg w-3/4 h-68 lg:h-96 lg:h-2/4 bg-slate-200 m-auto p-4 lg:p-8 flex-col z-50 ${loading ? "blur-sm" : ""}`}
        >
          <div className="flex">
            <div className="flex flex-col gap-1 w-1/4">
              <img
                src={profile_picture}
                className="rounded-full size-10 lg:size-20"
              />
              <h2 className="text-md font-medium text-slate-600">{name}</h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Título do tópico"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border border-cyan-400 rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex pl-20 lg:pl-56">
            <textarea
              placeholder="Digite a descrição do tópico"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 rounded-md border border-cyan-400 resize-none"
            />
          </div>
          <div className="w-full flex justify-end pt-4">
            <button
              onClick={EditTopicFunc}
              className="transition-all duration-400 hover:scale-105 bg-green-400 p-2 lg:p-4 rounded-md hover:text-white"
            >
              Atualizar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
