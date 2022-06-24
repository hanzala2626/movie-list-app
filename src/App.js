import React, { useEffect, useState, } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';





const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=90355b7f';

// const movie1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const App = () => { 

const [movies, Setmovies] = useState([]);

const [searchTerm, SetsearchTerm] = useState([]);

const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
console.log(movies)
    Setmovies(data.Search);
}

useEffect(() =>{
searchMovies('');
},[])

// function oKeyUp(e){
// if(e.key==='Enter'){
// ()=>{searchMovies(searchTerm)}
// }
// }


     return( 


               <div className='app'>
                   <h1>Movie Dub</h1>

            <div className='search'>

                <input
                placeholder='Enter Movie Name'
                value={searchTerm}
                onChange={(e)=>SetsearchTerm(e.target.value)}>
               
                 </input>
               
                <img
                src={SearchIcon}
                alt='search'
                onClick={() =>searchMovies(searchTerm)}
                
                />
                </div>

                {
                    movies?.length>0
                    ?(
                   <div className='container'>
                {movies.map((movie) =>(
                    <MovieCard movie={movie}/>
               ) )}
                     </div>
                    ):(
                        <div className='empty'>
                        <h2>No Movies Found</h2>
                        </div>
                    )

                }

                              
                  </div>
                 
               
            );
         } 

export default App;