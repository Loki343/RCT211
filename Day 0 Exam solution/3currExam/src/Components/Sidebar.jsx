import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBatch = searchParams.getAll("batch");
  const [batch, setBatch] = useState(initialBatch || []);
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    let newBatch = [...batch];
    const value = e.target.value;
    if (newBatch.includes(value)) {
      newBatch = newBatch.filter((el) => el !== value);
    } else {
      newBatch.push(value);
    }
    setBatch(newBatch);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    let params = {
      batch: batch,
      page: page,
    };
    setSearchParams(params);
  }, [batch,page]);

  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input
          data-testid="batch-web101"
          type="checkbox"
          checked={batch.includes("WEB101")}
          value={"WEB101"}
          onChange={handleChange}
        />
        <label>WEB-101</label>
        <br />
        <br />
        <input
          data-testid="batch-js201"
          type="checkbox"
          checked={batch.includes("JS201")}
          value={"JS201"}
          onChange={handleChange}
        />
        <label>JS-201</label>
        <br />
        <br />
        <input
          data-testid="batch-rct101"
          type="checkbox"
          checked={batch.includes("RCT101")}
          value={"RCT101"}
          onChange={handleChange}
        />
        <label>RCT101</label>
        <br />
        <br />
        <input
          data-testid="batch-rct211"
          type="checkbox"
          checked={batch.includes("RCT211")}
          value={"RCT211"}
          onChange={handleChange}
        />
        <label>RCT211</label>
        <br />
        <br />
        <input
          data-testid="batch-nxm101"
          type="checkbox"
          checked={batch.includes("NXM101")}
          value={"NXM101"}
          onChange={handleChange}
        />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev" onClick={handlePrev}>
          Previous
        </button>
        <button data-testid="page-next" onClick={handleNext}>
          Next
        </button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
