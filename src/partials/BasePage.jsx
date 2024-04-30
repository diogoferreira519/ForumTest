import { useEffect, useState } from "react";
import Topic from "./Topic";
export default function BasePage() {
  const [items, setItems] = useState();
  useEffect(() => {
    const baseUrl = `https://api-forum-ef2ae-default-rtdb.asia-southeast1.firebasedatabase.app`;
    fetch(`${baseUrl}/topics.json`)
      .then((data) => data.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="w-full h-full bg-gray-100 flex gap-4 p-3 items-center justify-center shadow-md">
      <div className="flex flex-col gap-4 h-full w-full">
        <ul>
          {items && items.map((item, index)=>{
             <li key={index}><Topic props={}/></li>
            }
          )}
        </ul>
        
      </div>
    </div>
  );
}
