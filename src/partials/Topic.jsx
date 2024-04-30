import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";
import React from "react";

export default function Topic(props) {
  const [like, setLike] = useState(false);
  const [Number, setNumber] = useState(244);
  function handleIcon() {
    const newLike = like ? Number - 1 : Number + 1;
    setLike(!like);
    setNumber(newLike);
  }
  return (
    <div className="flex flex-col gap-2 w-full bg-gray-300 rounded-md p-4">
      <div className="flex gap-2">
        <img src={`${props.profile_picture}`} />
        <h2 className="text-2xl font-semibold">Title</h2>
      </div>
      <div className="over-flow-y-scroll">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
        posuere erat. Morbi lobortis massa et auctor aliquet. Fusce varius,
        felis ut iaculis consequat, nisi felis scelerisque lacus, nec ultrices
        nunc lectus id justo. Nulla elementum scelerisque sapien ut accumsan.
        Suspendisse a dictum sapien.
      </div>
      <div className="flex justify-end pr-2 items-center gap-2">
        {Number}
        {like && <FcLike size={22} onClick={handleIcon} />}
        {!like && <FcLikePlaceholder size={22} onClick={handleIcon} />}
      </div>
    </div>
  );
}
