import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import AddTopicHome from "../src/pages/AddTopicHome";
import EditTopic from "../src/pages/EditTopic";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addTopic" element={<AddTopicHome />} />
      <Route path="/editTopic/:id" element={<EditTopic />} />
    </Routes>
  );
}
