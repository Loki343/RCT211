import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const students = useSelector((store) => store.studentReducer.students);

  useEffect(() => {
    const newData = students.find((el) => el.id == id);
    setData(newData);
  }, []);

  const { Poster, name, batch, student_code, score, green_card } = data;

  return (
    <div className={"student-card"}>
      <h1 className="student-id">{id}</h1>
      <img src={Poster} alt="student" />
      <h3>Name: {name}</h3>
      <p>Batch: {batch}</p>
      <p>Code: {student_code}</p>
      <h3>Score: {score}</h3>
      <h2>Bounty: {green_card}</h2>
    </div>
  );
};
