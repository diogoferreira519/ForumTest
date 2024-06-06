import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/pages/Home";
import AddTopicHome from "../src/pages/AddTopicHome";
import EditTopic from "../src/pages/EditTopic";
import Login from "../src/pages/Login";
import { useState } from "react";
export default function MainRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const Authentication = () => {
    setIsAuth(true);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuth ? (
            <Navigate to="/topics" />
          ) : (
            <Login funcIsAuth={Authentication} />
          )
        }
      />
      <Route path="/topics" element={isAuth ? <Home /> : <Navigate to="/" />} />
      <Route
        path="/addTopic"
        element={isAuth ? <AddTopicHome /> : <Navigate to="/" />}
      />
      <Route
        path="/editTopic/:id"
        element={isAuth ? <EditTopic /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
