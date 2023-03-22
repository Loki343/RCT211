import React from "react";

export const ProjectRow = ({ name, tech_stack, assigned_to, status, id }) => {
  const toggle = () => {
    if (document.querySelector(".aaa").innerText === "pending") {
      document.querySelector(".aaa").innerText = "completed";
    } else if (document.querySelector(".aaa").innerText === "completed") {
      document.querySelector(".aaa").innerText = "reviewed";
    }
  };
  return (
    <tr>
      <td data-testid="project-id">{id}</td>
      <td data-testid="project-name">{name}</td>
      <td data-testid="project-tech-stack">{tech_stack}</td>
      <td data-testid="project-assigned-to">{assigned_to}</td>
      <td data-testid="project-status" className="aaa">
        {/* Show the current status value */}
        {status === true ? "completed" : "pending"}
      </td>
      <td>
        <button data-testid="toggle-button" onClick={toggle}>
          Toggle
        </button>
      </td>
    </tr>
  );
};
