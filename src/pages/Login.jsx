import { MdForum } from "react-icons/md";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Login({ funcIsAuth }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [namePlaceHolder, setNamePlaceHolder] = useState(true);
  const [imagePlaceHolder, setImagePlaceHolder] = useState(true);
  const [cookies, setCookie] = useCookies(["isAuth"]);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePlaceHolder(true);
    }
  };

  // Função para converter a imagem para base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (!name) {
      setNamePlaceHolder(false);
    }
    if (!image) {
      setImagePlaceHolder(false);
    }
    if (name && image) {
      setNamePlaceHolder(true);
      setImagePlaceHolder(true);

      try {
        const base64Image = await convertToBase64(image);
        setCookie("isAuth", { user: name, image: base64Image });
        funcIsAuth();
        navigate("/topics");
      } catch (error) {
        console.error("Erro ao converter imagem para base64:", error);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-cyan-500 to-slate-700">
      <div className="w-full h-full flex flex-col lg:flex-row md:flex-row items-center justify-center md:justify-start">
        <div className="flex flex-col items-center md:justify-center md:h-full md:bg-slate-800 md:w-3/6">
          <h1 className="font-extrabold text-slate-200 lg:text-2xl">
            ForumDev
          </h1>
          <MdForum className="text-cyan-400 size-24 lg:size-52" />
        </div>
        <form
          className="m-auto w-72 h-56 md:w-72 md:h-60 bg-slate-200 rounded-md shadow-inner lg:scale-125"
          onSubmit={sendData}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-2">
            <label className="antialized font-extralight">
              Registre seu nome de usuário:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder={
                namePlaceHolder ? "Fulano_2009" : "Nome não pode ser vazio"
              }
              className={`text-center placeholder:text-sm placeholder:text-center p-2 rounded-md ${namePlaceHolder ? "" : "placeholder:text-red-400"} border border-cyan-400 w-5/6`}
              required
            />
            <label className="antialized font-extralight">
              Escolha uma foto de perfil:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={`p-2 rounded-md border border-cyan-400 ${imagePlaceHolder ? "" : "placeholder:text-red-400"} mb-2 w-5/6`}
              required
            />
            <div>
              <button
                type="submit"
                className="px-4 py-1 transition-all duration-300 hover:text-white bg-cyan-400 rounded-md hover:scale-105"
              >
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
