import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProjectPage = ({ projectId }) => {
  const navigate = useNavigate();
  const project = useSelector((state) =>
    state.toolkit.items.find((el) => el.id.toString() === projectId)
  );
  const handleChangePage = () => {
    navigate(`/project`);
  };
  return (
    <>
      <button className="btn btn-primary mt-5 mb-3" onClick={handleChangePage}>
        <i className="bi bi-arrow-left-short"></i>Назад
      </button>
      <div className="d-flex justify-content-center flex-sm-column">
        <h1>{project.name}</h1>
        <h3>
          Status:{" "}
          <span className={"badge bg-" + project.status}>{project.status}</span>
        </h3>
        <p>Token type: {project.type}</p>
        <p>Conditions: {project.conditions}</p>
        <p>Volume: {project.volume}</p>
        <p>ROI: {project.roi}</p>
        <p>Free float: {project.free}</p>
        <p>Insurance hedge: {project.hedge}</p>
      </div>
    </>
  );
};

export default ProjectPage;
