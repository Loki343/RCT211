import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";



export const Sidebar = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const initialCategory = serachParams.getAll('rating');
  const [category, setCategory] = useState(initialCategory || []);
  const initialOrder=serachParams.get('order');
  const [order, setorder]= useState(initialOrder || '');




  const handleChange = (e) => {

    let newCategory = [...category]
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    }
    else {
      newCategory.push(value);
    }

    setCategory(newCategory);
  }

  const handleSort=(e)=>{
    setorder(e.target.value);
  }

  useEffect(() => {
    let params = {
      rating: category,
    }
    order && (params.order=order);
    setSearchParams(params);
  }, [category, order]);




  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input data-testid="movie-filter-1" type="checkbox" checked={category.includes('1')} value={'1'} onChange={handleChange} />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-2" type="checkbox" checked={category.includes('2')} value={'2'} onChange={handleChange} />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-3" type="checkbox" checked={category.includes('3')} value={'3'} onChange={handleChange} />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-4" type="checkbox" checked={category.includes('4')} value={'4'} onChange={handleChange} />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox" checked={category.includes('5')} value={'5'} onChange={handleChange} />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div onChange={handleSort}>
        <input data-testid="movie-sort-asc" type="radio" name="order" value={'asc'} defaultChecked={order==='asc'}/>
        <label>Ascending</label>
        <br />
        <input data-testid="movie-sort-desc" type="radio" name="order" value={'desc'} defaultChecked={order==='desc'}/>
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
