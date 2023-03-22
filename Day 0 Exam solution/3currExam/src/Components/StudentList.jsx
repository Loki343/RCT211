import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getStudents } from "./../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const StudentList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const students = useSelector((store) => store.studentReducer.students);

  useEffect(() => {
    let obj = {
      params: {
        batch: searchParams.getAll("batch"),
        _limit: searchParams.get("page") && 10,
        _page: searchParams.get("page"),
      },
    };
    dispatch(getStudents(obj));
  }, [location.search]);
  
  return (
    <div>
      <DIV data-testid="student-list">
        {students.map((el) => (
          <StudentCard key={el.id} {...el} />
        ))}
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 10px;
  img {
    width: 70%;
  }
  div {
    border: 1px solid;
  }
`;
