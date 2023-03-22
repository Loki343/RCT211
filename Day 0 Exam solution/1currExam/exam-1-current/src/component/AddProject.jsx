import React, { useReducer, useState } from "react";
import { ProjectList } from "./ProjectList";

const initialState = {
  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, name: action.payload };
    }

    case "TECH_STACK": {
      return { ...state, tech_stack: action.payload };
    }

    case "ASSIGNED_TO": {
      return { ...state, assigned_to: action.payload };
    }

    case "STATUS": {
      return { ...state, status: action.payload };
    }

    case "RESET": {
      return initialState;
    }

    default:
      return state;
  }
};

export const AddProject = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [submitinfo, setSubmitinfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitinfo([...submitinfo, state]);
    dispatch({ type: "RESET" });
  };
  // console.log(submitinfo);
  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            {/* Add Input box here */}
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "NAME", payload: e.target.value })
              }
            />
          </div>
          <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
            {/* Provide select tag with name attribute `name="tech_stack"` */}
            <select
              data-testid="tech-stack-select"
              name="tech_stack"
              value={state.tech_stack}
              onChange={(e) =>
                dispatch({ type: "TECH_STACK", payload: e.target.value })
              }
            >
              <option value="">tech_stack</option>
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            {/* This Select Tag will have `data-testid="tech-stack-select` */}
          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
            {/* Provide select tag with name attribute `name="assigned_to"` */}
            <select
              data-testid="assigned-to-select"
              name="assigned_to"
              value={state.assigned_to}
              onChange={(e) =>
                dispatch({ type: "ASSIGNED_TO", payload: e.target.value })
              }
            >
              <option value="">Person</option>
              <option value="nrupul">Nrupul</option>
              <option value="albert">Albert</option>
              <option value="aman">Aman</option>
            </select>
            {/* This Select Tag will have `data-testid="assigned-to-select` */}
          </div>
          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status</label>
            {/* Provide checkbox  with name attribute `name="status"` */}
            <input
              type="checkbox"
              checked={false}
              onChange={(e) =>
                dispatch({ type: "STATUS", payload: e.target.checked })
              }
            />Completed
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}
      {submitinfo.length > 0 ? (
        <ProjectList data={submitinfo} />
      ) : (
        <div data-testid="no-project-container">No Project Found</div>
      )}
    </div>
  );
};

export { initialState, reducer };
