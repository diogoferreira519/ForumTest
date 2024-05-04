import { useEffect, useState } from "react";
import Topic from "../components/Topic";
import NewTopic from "../components/NewTopic";
import { AiOutlineLoading } from "react-icons/ai";
export default function BasePage() {
  const [isLoading, setisLoading] = useState(true);
  const [items, setItems] = useState();
  const [opacity, setOpacity] = useState(true);
  const baseUrl = `https://api-forum-ef2ae-default-rtdb.asia-southeast1.firebasedatabase.app`;
  const loadData = () => {
    fetch(`${baseUrl}/topics.json`)
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          setItems(data);
        }
      })
      .then((_) => {
        setisLoading(false);
        setOpacity(false);
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleDelete = () => {
    loadData();
  };
  return (
    <div
      className={`w-full h-full bg-gradient-to-b from-cyan-500 to-slate-700 flex gap-4 p-8 shadow-md mx-auto ${opacity ? "blur-sm" : ""}`}
    >
      <div className="flex flex-col gap-4 h-full w-full mx-auto">
        <div className="flex justify-center">
          <NewTopic />
        </div>
        {isLoading && (
          <div className="h-screen w-screen flex justify-center pt-22">
            <AiOutlineLoading
              className={`z-50 text-white absolute animate-spin size-32 flex`}
            />
          </div>
        )}
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center justify-center">
          {items &&
            items.map((item, index) => {
              return (
                <li key={index}>
                  <Topic
                    image={item.profile_picture}
                    profile_name={item.profile_name}
                    id={item.id}
                    likes={item.likes}
                    comments={item.comments}
                    title={item.title}
                    description={item.description}
                    onDelete={handleDelete}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
