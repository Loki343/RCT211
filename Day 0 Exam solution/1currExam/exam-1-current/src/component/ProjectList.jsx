import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({ data }) => {
  console.log(data);
  return (
    <div className="project-list-wrapper">
      <table
        data-testid="project-container"
        style={{ width: "30%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Tech Stack</th>
            <th>Assigned To</th>
            <th>Current Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          
            {data.map((item, index) => (
              <ProjectRow
                key={index + 1}
                id={index + 1}
                name={item.name}
                tech_stack={item.tech_stack}
                assigned_to={item.assigned_to}
                status={item.status}
              />
            ))}
          
        </tbody>
      </table>
    </div>
  );
};
