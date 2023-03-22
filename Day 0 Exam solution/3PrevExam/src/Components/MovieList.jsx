import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const [searchParams]= useSearchParams();
  const location = useLocation();

  const dispatch= useDispatch();

  const movies=useSelector(store=>(store.movieReducer.movies));
  // console.log(movies);
 
  let obj={
    params:{
      rating: searchParams.getAll('rating'),
      _sort: searchParams.get('order') && 'Year',
      _order: searchParams.get('order')
    }
  }


  useEffect(()=>{
    dispatch(getMovies(obj));
  },[location.search]);


  return <DIV data-testid="movie-list">{movies.map((el)=>(
    <MovieCard key={el.id} {...el}/>
  ))}</DIV>;
};

const DIV=styled.div`
width: 70%;
display: grid;
grid-template-columns: repeat(3, 1fr);
margin: auto;
gap: 20px;

img{
  width: 70%;
}
`;
