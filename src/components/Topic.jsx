import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Topic({
  image,
  id,
  profile_name,
  likes,
  comments,
  title,
  description,
  onDelete,
}) {
  const [onTopicChange, setOnTopicChange] = useState(false);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(image);
  const [items, setItems] = useState();
  const baseUrl = `https://api-forum-ef2ae-default-rtdb.asia-southeast1.firebasedatabase.app/topics`;
  useEffect(() => {
    fetch(imageUrl).then((data) => {
      if (data.status === 404) {
        setImageUrl(
          "https://images7.memedroid.com/images/UPLOADED774/5d9acdde69b19.jpeg",
        );
      }
    });
  }, []);

  useEffect(() => {
    if (id > 19) {
      fetch(`${baseUrl}.json`)
        .then((data) => data.json())
        .then((data) => {
          setItems(data);
        });
    }
  }, []);
  const DeleteTopic = async () => {
    await fetch(`${baseUrl}/${id}.json`, {
      method: "DELETE",
    })
      .then(() => navigate("/topics"))
      .finally(() => onDelete())
      .catch((error) => console.error("Erro ao deletar tópico:", error));
  };
  const EditTopicFunc = (id) => {
    navigate(`/editTopic/${id}`);
  };
  const [like, setLike] = useState(false);
  const [Number, setNumber] = useState(likes);
  function handleIcon() {
    const newLike = like ? Number - 1 : Number + 1;
    setLike(!like);
    setNumber(newLike);
  }
  return (
    <div
      className={`flex flex-col gap-2 w-full bg-slate-200 bg-gray-300 rounded-md p-4 shadow-xl h-78 transition-all duration-500 hover:scale-105 border border-white ${onTopicChange ? "blur-sm" : ""}`}
    >
      <div className="flex gap-2 justify-start items-center">
        <div className="flex flex-col gap-1">
          <img src={imageUrl} className="rounded-full size-10" />
          <h2 className="text-md font-medium text-wrap text-slate-600">
            {profile_name}
          </h2>
        </div>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold text-start ">{title} </h2>
          {id > 19 ? (
            <div className="flex items-center relative bottom-6">
              <FaRegEdit
                onClick={() => {
                  EditTopicFunc(id);
                }}
                className="size-8 p-2 transition-all duration-300 hover:bg-cyan-400 p-1 hover:text-slate-200 rounded-md cursor-pointer"
              />
              <FaTrashAlt
                className="size-8 p-2 transition-all duration-300 hover:bg-red-600 hover:text-slate-200 rounded-md cursor-pointer"
                onClick={() => {
                  DeleteTopic(id);
                  setOnTopicChange(true);
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="over-flow-y-scroll">{description}</div>
      <div className="flex justify-between pr-2 items-center gap-2">
        <div>
          <h2 className="text-slate-500 text-sm cursor-pointer">
            ver todos os {comments} comentários
          </h2>
        </div>
        <div className="flex items-center gap-2 ">
          {Number}
          {like && <FcLike size={22} onClick={handleIcon} />}
          {!like && <FcLikePlaceholder size={22} onClick={handleIcon} />}
        </div>
      </div>
    </div>
  );
}
