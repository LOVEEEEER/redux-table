import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Project from "./components/layout/Project";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/project/*" element={<Project />} />
        <Route path="/" element={<Navigate to="/project" />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
export default App;
