import { Link } from "react-router-dom";

export const StudentCard = ({ id, Poster, name, batch, green_card }) => {
  return (
    <div className={"student-card"}>
      <img src={Poster} alt="im" className="student-image" />
      <h3 className="student-name">{name}</h3>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card">{green_card}</h3>
      <Link to={`/students/${id}`}>
        <button className="student-detail">View Details</button>
      </Link>
    </div>
  );
};
