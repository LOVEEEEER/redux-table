import React from "react";
import TablePage from "../page/TablePage";
import ProjectPage from "../page/ProjectPage";
import { useParams } from "react-router-dom";

const Project = () => {
  const params = useParams();
  const projectId = params["*"];
  return (
    <div className="container">
      {projectId ? <ProjectPage projectId={projectId} /> : <TablePage />}
    </div>
  );
};

export default Project;
