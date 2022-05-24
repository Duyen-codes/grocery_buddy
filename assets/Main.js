import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./components/ProjectList";
import ProjectCreate from "./components/ProjectCreate";
import ProjectEdit from "./components/ProjectEdit";
import ProjectShow from "./components/ProjectShow";

function Main() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProjectList />} />
        <Route path="/create" element={<ProjectCreate />} />
        <Route path="/edit/:id" element={<ProjectEdit />} />
        <Route path="/show/:id" element={<ProjectShow />} />
      </Routes>
    </Router>
  );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Main />);
